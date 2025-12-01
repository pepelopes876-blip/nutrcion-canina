import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Loader2, User, Bot, AlertCircle, Trash2 } from 'lucide-react';

// NOTE: In a real production app, never expose keys in client-side code without backend proxy.
// We are using process.env as per instructions.
const API_KEY = process.env.API_KEY || '';

const AIAdvisor: React.FC = () => {
  // Inicializamos el chat limpio. Este estado es local del componente, 
  // por lo que cada vez que un usuario carga la página (o el componente se remonta), es nuevo.
  const INITIAL_MESSAGE = { role: 'model' as const, text: '¡Hola! Soy tu asistente de Nutrición Canina. Puedo ayudarte a calcular porciones, verificar ingredientes o sugerir sustituciones para las recetas del eBook. ¿En qué te ayudo?' };
  
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setError(null);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!API_KEY) {
      setError("Falta la API Key de Gemini. Configura process.env.API_KEY.");
      return;
    }

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      const model = 'gemini-2.5-flash';
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
          {
            role: 'user',
            parts: [{ text: `
              Actúa como un Nutricionista Veterinario experto especializado en dieta natural canina.
              Contexto: Estás dentro de un eBook llamado "Confeitaría y Nutrición Canina".
              
              Reglas:
              1. Solo responde preguntas sobre nutrición de perros, recetas o seguridad alimentaria.
              2. Si preguntan por ingredientes tóxicos (uvas, chocolate, xilitol), sé alarmista y claro.
              3. Usa fuentes como AAFCO o WSAVA implícitamente.
              4. Sé breve, empático y profesional.
              
              Pregunta del usuario: ${userMsg}
            ` }]
          }
        ]
      });

      const text = response.text || "Lo siento, no pude generar una respuesta en este momento.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: "Hubo un error al conectar con el servidor de IA. Por favor intenta más tarde." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto h-[calc(100vh-8rem)] flex flex-col bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden">
      <div className="bg-brand-600 p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Bot size={24} />
            <div>
            <h2 className="font-bold">NutriBot IA</h2>
            <p className="text-xs text-brand-100">Asesor 24/7 (Basado en Gemini 2.5)</p>
            </div>
        </div>
        <button 
            onClick={handleClearChat}
            className="text-brand-100 hover:text-white p-2 rounded hover:bg-brand-700 transition-colors flex items-center gap-1 text-xs"
            title="Borrar historial"
        >
            <Trash2 size={16} /> <span className="hidden sm:inline">Nueva Sesión</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-stone-300' : 'bg-brand-100 text-brand-700'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-3 rounded-lg text-sm max-w-[80%] ${msg.role === 'user' ? 'bg-stone-800 text-white' : 'bg-white border border-stone-200 text-stone-700 shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center"><Bot size={16} /></div>
            <div className="bg-white border border-stone-200 p-3 rounded-lg flex items-center gap-2 text-sm text-stone-500">
              <Loader2 className="animate-spin" size={16} />
              Pensando...
            </div>
          </div>
        )}
        {error && (
          <div className="p-3 bg-red-100 text-red-700 text-sm rounded flex items-center gap-2">
             <AlertCircle size={16}/> {error}
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-stone-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ej: ¿Puedo sustituir la harina de avena por arroz?"
            className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-brand-600 text-white p-2 rounded-lg hover:bg-brand-700 disabled:opacity-50 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-stone-400 mt-2 text-center">
          La IA puede cometer errores. El chat es privado y se borra al cerrar la página.
        </p>
      </div>
    </div>
  );
};

export default AIAdvisor;