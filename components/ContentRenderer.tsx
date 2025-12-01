import React from 'react';
import { Module } from '../types';
import { AlertTriangle, CheckCircle, Info, FlaskConical, ChefHat, Thermometer } from 'lucide-react';

interface Props {
  module: Module;
}

const ContentRenderer: React.FC<Props> = ({ module }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn pb-12">
      <header className="border-b-4 border-brand-500 pb-6 mb-8">
        <h2 className="text-brand-700 font-bold uppercase tracking-widest text-sm mb-2">
          {module.title}
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
          {module.subtitle || module.title}
        </h1>
      </header>

      {module.sections?.map((section, idx) => (
        <section key={idx} className="mb-12 page-break bg-white p-0 md:p-6 rounded-xl md:shadow-sm border border-transparent md:border-stone-100">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3 border-l-4 border-brand-400 pl-4">
            {section.type === 'warning' && <AlertTriangle className="text-red-500" />}
            {section.type === 'tip' && <CheckCircle className="text-nature-500" />}
            {section.type === 'scientific' && <FlaskConical className="text-blue-500" />}
            {section.title}
          </h3>

          {section.type === 'text' && (
            <div className="prose prose-stone max-w-none text-lg leading-relaxed text-stone-700 text-justify whitespace-pre-line">
              {section.content}
            </div>
          )}

          {section.type === 'scientific' && (
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-stone-800">
               <p className="font-serif text-lg leading-relaxed">{section.content}</p>
               <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wide">
                 <FlaskConical size={14} /> Evidencia Científica / Bioquímica
               </div>
            </div>
          )}

          {(section.type === 'warning' || section.type === 'tip') && (
            <div className={`p-6 rounded-lg border-l-4 shadow-sm ${section.type === 'warning' ? 'bg-red-50 border-red-500 text-red-900' : 'bg-green-50 border-nature-500 text-green-900'}`}>
              <p className="text-lg font-medium">{section.content}</p>
            </div>
          )}

          {section.type === 'table' && section.table && (
            <div className="overflow-x-auto rounded-lg border border-stone-200 shadow mt-4">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-stone-800 text-white uppercase font-semibold tracking-wider">
                  <tr>
                    {section.table.headers.map((h, i) => (
                      <th key={i} className="px-6 py-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 bg-white">
                  {section.table.rows.map((row, rI) => (
                    <tr key={rI} className="hover:bg-stone-50 transition-colors">
                      {row.map((cell, cI) => (
                        <td key={cI} className="px-6 py-4 text-stone-700 border-r border-stone-50 last:border-0">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.type === 'list' && section.list && (
            <ul className="grid gap-3 mt-4">
              {section.list.map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-stone-50 p-4 rounded-lg border border-stone-100 hover:border-brand-300 transition-colors">
                  <div className="mt-1 min-w-[24px] h-6 rounded-full bg-brand-200 text-brand-800 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-stone-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {module.recipes && (
        <section className="mt-16 pt-8 border-t-2 border-dashed border-stone-300">
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-brand-500 text-white rounded-full shadow-lg">
               <ChefHat size={32} />
             </div>
             <div>
               <h3 className="text-3xl font-bold text-stone-900">Recetario Exclusivo</h3>
               <p className="text-stone-500">Módulo: {module.subtitle}</p>
             </div>
          </div>
          
          <div className="grid gap-8">
            {module.recipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden page-break group hover:shadow-xl transition-shadow">
                <div className={`p-5 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4
                  ${recipe.category === 'Funcional' ? 'bg-blue-50 border-blue-100' : 
                    recipe.category === 'Festiva' ? 'bg-purple-50 border-purple-100' : 
                    recipe.category === 'Premium' ? 'bg-amber-50 border-amber-100' : 'bg-stone-50 border-stone-200'}
                `}>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded 
                      ${recipe.category === 'Funcional' ? 'bg-blue-200 text-blue-800' : 
                        recipe.category === 'Festiva' ? 'bg-purple-200 text-purple-800' : 
                        recipe.category === 'Premium' ? 'bg-amber-200 text-amber-800' : 'bg-stone-200 text-stone-700'}
                    `}>
                      {recipe.category}
                    </span>
                    <h4 className="text-2xl font-bold text-stone-900 mt-2">{recipe.title}</h4>
                    <p className="text-stone-600 text-sm mt-1">{recipe.description}</p>
                  </div>
                  <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <div className="text-center">
                       <span className="block text-xl font-bold text-stone-800">{recipe.nutrition.kcal}</span>
                       <span className="text-[10px] uppercase text-stone-400 font-bold">kcal</span>
                    </div>
                    {recipe.nutrition.protein && (
                      <div className="text-center border-l pl-4 border-stone-100">
                        <span className="block text-xl font-bold text-nature-600">{recipe.nutrition.protein}</span>
                        <span className="text-[10px] uppercase text-stone-400 font-bold">Prot</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h5 className="font-bold text-stone-800 flex items-center gap-2 border-b pb-2">
                      <Info size={18} className="text-brand-500" /> Ingredientes
                    </h5>
                    <ul className="space-y-2 text-stone-700">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                          <span className="text-brand-400 mt-1">•</span> {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-bold text-stone-800 flex items-center gap-2 border-b pb-2">
                       <ChefHat size={18} className="text-brand-500" /> Preparación
                    </h5>
                    <ol className="space-y-4 text-stone-700 list-none">
                      {recipe.instructions.map((inst, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-base">
                          <span className="font-bold text-stone-400">{i + 1}.</span>
                          {inst}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                
                {(recipe.notes || recipe.conservation) && (
                  <div className="bg-stone-50 p-4 border-t border-stone-100 flex flex-col md:flex-row gap-4 text-sm">
                    {recipe.notes && (
                      <div className="flex-1 italic text-stone-600">
                        <span className="font-bold text-stone-800">Nota:</span> {recipe.notes}
                      </div>
                    )}
                    {recipe.conservation && (
                      <div className="flex-1 flex items-center gap-2 text-stone-600 bg-white p-2 rounded border border-stone-200">
                        <Thermometer size={16} className="text-blue-500" /> 
                        <span><span className="font-bold">Conservación:</span> {recipe.conservation}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ContentRenderer;