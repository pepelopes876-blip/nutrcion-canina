import React from 'react';
import { BookOpen, Coffee, Cpu, Download, Menu, Printer, ShieldCheck, Utensils } from 'lucide-react';
import { AppView, Module } from '../types';

interface SidebarProps {
  modules: Module[];
  currentModule: string;
  currentView: AppView;
  onSelectModule: (id: string) => void;
  onChangeView: (view: AppView) => void;
  onPrint: () => void;
  isMobileOpen: boolean;
  toggleMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  modules, currentModule, currentView, onSelectModule, onChangeView, onPrint, isMobileOpen, toggleMobile
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobile}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-72 bg-stone-900 text-stone-100 flex flex-col transition-transform duration-300 z-30
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        no-print
      `}>
        <div className="p-6 border-b border-stone-700 bg-brand-600">
          <h1 className="font-serif text-xl font-bold text-white leading-tight">
            Nutrición <br/> Canina Pro
          </h1>
          <p className="text-xs text-brand-100 mt-1">eBook & Curso Interactivo</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
            Contenido
          </div>
          
          <ul className="space-y-1">
            {modules.map((mod) => (
              <li key={mod.id}>
                <button
                  onClick={() => {
                    onSelectModule(mod.id);
                    onChangeView(AppView.READER);
                    if(window.innerWidth < 768) toggleMobile();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors
                    ${currentModule === mod.id && currentView === AppView.READER
                      ? 'bg-stone-800 text-brand-500 border-r-4 border-brand-500' 
                      : 'hover:bg-stone-800 text-stone-300'}
                  `}
                >
                  <BookOpen size={16} />
                  <span className="text-left line-clamp-1">{mod.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="px-4 mt-8 mb-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
            Herramientas
          </div>
          
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => { onChangeView(AppView.AI_ADVISOR); if(window.innerWidth < 768) toggleMobile(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors
                   ${currentView === AppView.AI_ADVISOR ? 'bg-brand-900 text-brand-500' : 'hover:bg-stone-800 text-stone-300'}
                `}
              >
                <Cpu size={16} />
                <span>Asistente IA</span>
              </button>
            </li>
             <li>
              <button
                onClick={() => { onChangeView(AppView.RESOURCES); if(window.innerWidth < 768) toggleMobile(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors
                   ${currentView === AppView.RESOURCES ? 'bg-brand-900 text-brand-500' : 'hover:bg-stone-800 text-stone-300'}
                `}
              >
                <Download size={16} />
                <span>Descargas & Scripts</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-stone-800">
          <button 
            onClick={onPrint}
            className="flex items-center justify-center gap-2 w-full bg-stone-800 hover:bg-stone-700 py-2 rounded text-sm text-stone-300 transition-colors"
          >
            <Printer size={16} />
            <span>Imprimir PDF</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;