import React, { useEffect, useState } from 'react';
import { REPRESENTANTES, REPRESENTANTE_PADRAO, Representante } from '../representantes';

interface WhatsAppButtonProps {
  representante?: Representante;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ representante: propRepresentante }) => {
  const [representante, setRepresentante] = useState<Representante>(propRepresentante || REPRESENTANTE_PADRAO);

  useEffect(() => {
    if (propRepresentante) {
      setRepresentante(propRepresentante);
      return;
    }
    const pathId = window.location.pathname.replace('/', '').trim();
    if (pathId && REPRESENTANTES[pathId]) {
      setRepresentante(REPRESENTANTES[pathId]);
    }
  }, [propRepresentante]);

  const mensagemTexto = "Olá, estou vindo do site da Federal Associados. Você poderia me explicar como funciona essa internet?";
  const msg = encodeURIComponent(mensagemTexto);
  
  const numeroLimpo = representante.whatsapp.replace(/\D/g, '');
  const urlWa = `https://wa.me/${numeroLimpo}?text=${msg}`;

  return (
    <a
      href={urlWa}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 flex items-center justify-center drop-shadow-lg"
      aria-label="Contato WhatsApp"
    >
      <svg className="w-14 h-14" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M23.51 20.31c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.96-1.79-2.14-2-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.3-.7-.6-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.12-.87 2.42-1.71.3-.84.3-1.56.21-.171-.09-.15-.33-.24-.69-.42z"
          fill="white"
        />
        <path
          d="M16 6.5c-5.25 0-9.5 4.25-9.5 9.5 0 2.08.67 4.01 1.81 5.58L7 25l3.52-1.27c1.5 1 3.32 1.57 5.28 1.57 5.25 0 9.5-4.25 9.5-9.5S21.25 6.5 16 6.5z"
          fill="white"
          fillOpacity="0.2"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
