import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          Utilizamos cookies propias para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias. 
          Si continúa navegando, consideramos que acepta su uso.
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="bg-[#FF0066] hover:bg-[#ff1a75] text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
          >
            Aceptar
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Cerrar banner de cookies"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}