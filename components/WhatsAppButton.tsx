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
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 flex items-center justify-center filter drop-shadow-md"
      aria-label="Contato WhatsApp"
    >
      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
        {/* Círculo/Fundo Verde Oficial */}
        <circle cx="12" cy="12" r="12" fill="#25D366" />
        
        {/* Balão e Telefone em Branco */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4a8 8 0 0 0-6.89 12.06L4 20l4.03-1.05A8 8 0 1 0 12 4zm4.67 11.23c-.2.55-1.16 1.07-1.6 1.12-.41.04-.94.18-3.08-.66-2.58-1.01-4.21-3.64-4.34-3.81-.13-.17-1.04-1.38-1.04-2.64 0-1.25.65-1.87.88-2.12.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.22.52.74 1.8.8 1.93.07.13.11.29.02.46-.09.17-.14.28-.27.43-.13.16-.28.35-.4.47-.13.13-.27.27-.11.53.15.26.68 1.12 1.46 1.81 1 .89 1.85 1.17 2.11 1.3.26.13.41.11.56-.06.15-.17.65-.76.82-1.02.17-.26.35-.22.58-.13.24.09 1.51.71 1.77.84.26.13.43.2.49.31.07.11.07.65-.13 1.2z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
