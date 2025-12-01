import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentRenderer from './components/ContentRenderer';
import AIAdvisor from './components/AIAdvisor';
import ResourcesView from './components/ResourcesView';
import { EBOOK_CONTENT } from './data';
import { AppView } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentModuleId, setCurrentModuleId] = useState(EBOOK_CONTENT[0].id);
  const [currentView, setCurrentView] = useState<AppView>(AppView.READER);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const currentModuleData = EBOOK_CONTENT.find(m => m.id === currentModuleId) || EBOOK_CONTENT[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Sidebar
        modules={EBOOK_CONTENT}
        currentModule={currentModuleId}
        currentView={currentView}
        onSelectModule={setCurrentModuleId}
        onChangeView={setCurrentView}
        onPrint={handlePrint}
        isMobileOpen={isMobileOpen}
        toggleMobile={() => setIsMobileOpen(!isMobileOpen)}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b border-stone-200 flex items-center px-4 justify-between shrink-0 no-print">
          <div className="flex items-center gap-3">
             <button onClick={() => setIsMobileOpen(true)} className="p-2 text-stone-600">
               <Menu size={24} />
             </button>
             <h1 className="font-serif font-bold text-stone-800">Nutrición Canina</h1>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth" id="main-content">
          {currentView === AppView.READER && (
            <ContentRenderer module={currentModuleData} />
          )}

          {currentView === AppView.AI_ADVISOR && (
            <div className="animate-fadeIn">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-serif font-bold text-brand-600">Consultorio Virtual</h2>
                <p className="text-stone-500">Impulsado por Gemini 2.5 Flash</p>
              </div>
              <AIAdvisor />
            </div>
          )}

          {currentView === AppView.RESOURCES && (
             <ResourcesView />
          )}
          
          <footer className="mt-20 pt-10 border-t border-stone-200 text-center text-sm text-stone-400 no-print">
            <p>© 2024 Confeitaría y Nutrición Canina. Todos los derechos reservados.</p>
            <p className="mt-2">Fuentes consultadas: AAFCO, WSAVA, PubMed.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;