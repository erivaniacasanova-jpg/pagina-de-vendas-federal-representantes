import React, { useEffect, useState } from 'react';
import { EntrancePopup } from './components/EntrancePopup';
import { REPRESENTANTES, REPRESENTANTE_PADRAO, Representante } from './representantes';

/**
 * App Component
 * Version 5.5.0 - Dynamic Representative Detection
 */
const App: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [representante, setRepresentante] = useState<Representante>(REPRESENTANTE_PADRAO);

  // Rebuild trigger for total cache invalidation
  const _forceRebuild = "v5.5.0_federalcelular_image_" + Date.now();

  useEffect(() => {
    // 1. Identifica o ID do representante direto pela URL (ex: "/135302" -> "135302")
    const pathId = window.location.pathname.replace('/', '').trim();

    if (pathId && REPRESENTANTES[pathId]) {
      setRepresentante(REPRESENTANTES[pathId]);
    }

    // 2. Trata navegação por Hash na página
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAcceptEntrance = (name: string) => {
    setUserName(name);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#060713] text-slate-100 selection:bg-purple-600 selection:text-white overflow-x-hidden font-sans antialiased">
      <EntrancePopup 
        isVisible={true} 
        onAccept={handleAcceptEntrance} 
      />
      {/* Cache bust: {_forceRebuild.slice(0, 10)} */}
    </div>
  );
};

export default App;
