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
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        {/* Fundo Verde Oficial do WhatsApp */}
        <path
          fill="#25D366"
          d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.522 5.827L0 24l6.357-1.478A11.936 11.936 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
        />
        {/* Ícone do WhatsApp em Branco */}
        <path
          fill="#FFF"
          d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
