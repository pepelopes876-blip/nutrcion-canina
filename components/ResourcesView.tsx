import React from 'react';
import { EBOOK_CONTENT } from '../data';
import { FileText, Video, Download } from 'lucide-react';

const ResourcesView: React.FC = () => {
  const allDownloads = EBOOK_CONTENT.flatMap(m => m.downloads || []);
  const allScripts = EBOOK_CONTENT.filter(m => m.videoScript).map(m => ({ module: m.title, script: m.videoScript! }));

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
      <section>
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Recursos Descargables</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {allDownloads.map((dl, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm flex items-center justify-between group hover:border-brand-400 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded ${dl.type === 'pdf' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                  <FileText size={20} />
                </div>
                <span className="font-medium text-stone-700">{dl.name}</span>
              </div>
              <Download size={18} className="text-stone-400 group-hover:text-brand-600" />
            </div>
          ))}
        </div>
      </section>

      <section className="page-break">
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Guiones de Video (Scripts)</h2>
        <div className="space-y-6">
          {allScripts.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="bg-stone-900 text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Video size={20} />
                  <span className="font-bold">{item.module} - {item.script.title}</span>
                </div>
                <span className="text-xs bg-stone-700 px-2 py-1 rounded">{item.script.duration}</span>
              </div>
              <div className="p-0">
                <table className="w-full text-sm text-left">
                  <thead className="bg-stone-100 text-stone-600 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-2 w-24">Tiempo</th>
                      <th className="px-4 py-2">Visual</th>
                      <th className="px-4 py-2">Audio / Locución</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {item.script.scenes.map((scene, sI) => (
                      <tr key={sI} className="hover:bg-stone-50">
                        <td className="px-4 py-3 font-mono text-stone-500">{scene.time}</td>
                        <td className="px-4 py-3 text-stone-700">{scene.visual}</td>
                        <td className="px-4 py-3 italic text-stone-600">"{scene.audio}"</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesView;