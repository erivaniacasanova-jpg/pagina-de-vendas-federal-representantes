import React, { useEffect, useState } from 'react';
import { EntrancePopup } from './components/EntrancePopup';

/**
 * App Component
 * Version 5.5.0 - Added federalcelular.jpeg image above CTA button.
 */
const App: React.FC = () => {
  const [userName, setUserName] = useState('');

  // Rebuild trigger for total cache invalidation
  const _forceRebuild = "v5.5.0_federalcelular_image_" + Date.now();

  useEffect(() => {
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
