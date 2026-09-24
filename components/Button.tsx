import React, { useEffect, useState } from 'react';
import { REPRESENTANTES, REPRESENTANTE_PADRAO, Representante } from '../representantes';

export const WhatsAppButton: React.FC = () => {
  const [representante, setRepresentante] = useState<Representante>(REPRESENTANTE_PADRAO);

  useEffect(() => {
    // Identifica o ID do representante pela URL (ex: "/135302" -> "135302")
    const pathId = window.location.pathname.replace('/', '').trim();
    if (pathId && REPRESENTANTES[pathId]) {
      setRepresentante(REPRESENTANTES[pathId]);
    }
  }, []);

  // Mensagem padronizada FIXA para todos os representantes (sem nome dinâmico)
  const msg = encodeURIComponent("Olá, estou vindo do site da Federal Associados. Você poderia me explicar como funciona essa internet?");
  const urlWa = `https://wa.me/${representante.whatsapp}?text=${msg}`;

  return (
    <a
      href={urlWa}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center w-14 h-14"
      aria-label="Contato WhatsApp"
    >
      {/* Ícone SVG embutido: garante que o logo NUNCA mais fique quebrado */}
      <svg className="w-8 h-8 fill-current block" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
