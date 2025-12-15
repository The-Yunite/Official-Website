'use client'; 

import { useEffect } from 'react';

const SessionClearer = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log('Clearing session storage...');
      // Use removeItem if you only want specific keys cleared, 
      // or clear() for everything.
      sessionStorage.clear(); 
    };

    // Attach the event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Detach the event listener when the component unmounts (though for this specific
    // use case related to window close/reload, it usually stays attached until the end)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // The empty dependency array ensures this runs once when the page loads

  return null; // This component doesn't render any UI
};

export default SessionClearer;