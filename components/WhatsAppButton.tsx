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
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 flex items-center justify-center drop-shadow-xl"
      aria-label="Contato WhatsApp"
    >
      <svg className="w-16 h-16" viewBox="0 0 60 60" fill="none">
        {/* Anel Externo Verde Claro */}
        <circle cx="30" cy="30" r="30" fill="#25D366" />
        
        {/* Círculo Principal Verde */}
        <circle cx="30" cy="30" r="27" fill="#128C7E" />
        <circle cx="30" cy="30" r="27" fill="#25D366" />
        
        {/* Ícone do WhatsApp Vazado (Branco Fino) */}
        <path
          d="M30.5 15C22.2 15 15.5 21.7 15.5 30c0 3.3.9 6.2 2.5 8.8L16 45l6.4-2c2.4 1.4 5.2 2.1 8.1 2.1 8.3 0 15-6.7 15-15S38.8 15 30.5 15zm0 26.8c-2.5 0-5-.7-7.1-1.9l-.5-.3-3.8 1.2 1.2-3.7-.3-.5c-1.4-2.1-2.1-4.6-2.1-7.1 0-7 5.7-12.7 12.7-12.7 7 0 12.7 5.7 12.7 12.7 0 7-5.7 12.3-12.8 12.3zm6.9-9.3c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.2.4-.9 1.3-1.1 1.5-.2.2-.4.3-.8.1-2.4-1.2-4.1-2.2-5.7-5-.4-.7.4-.7 1.1-2.1.1-.2.1-.4 0-.6-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.9.1-1.4.6-.5.5-1.8 1.8-1.8 4.3 0 2.5 1.8 5 2.1 5.3.3.4 3.6 5.5 8.8 7.7 3.2 1.4 4.5 1.5 6.1 1.3 1-.1 3.1-1.3 3.5-2.5.4-1.2.4-2.3.3-2.5-.2-.2-.4-.3-.8-.5z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
