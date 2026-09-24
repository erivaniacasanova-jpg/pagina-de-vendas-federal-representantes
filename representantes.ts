export interface Representante {
  id: string
  nome: string
  whatsapp: string
  linkCadastro: string
}

export const REPRESENTANTES: Record<string, Representante> = {
  "110956": {
    id: "110956",
    nome: "Francisco Eliedisom Dos Santos", // Coloque seu nome aqui
    whatsapp: "5584981321396", // Coloque o SEU WhatsApp com DDD (somente números)
    linkCadastro: "https://associarse.com.br"
  },
  "134684": {
    id: "134684",
    nome: "William Dos Santos Pessoa",
    whatsapp: "5521969400194",
    linkCadastro: "https://associarse.com.br/134684"
  },
  "135302": {
    id: "135302",
    nome: "Antonia Erivania Delmiro Jacinto",
    whatsapp: "558498410187",
    linkCadastro: "https://associarse.com.br/135302"
  },
  "153542": {
    id: "153542",
    nome: "Aline Aparecida Melo",
    whatsapp: "553193371195",
    linkCadastro: "https://associarse.com.br/153542"
  },
  "191651": {
    id: "191651",
    nome: "Gilmar Goncalves De Paula",
    whatsapp: "5522998914547",
    linkCadastro: "https://associarse.com.br/191651"
  },
  "88389": {
    id: "88389",
    nome: "Wagner Cruz Vieira",
    whatsapp: "5521996098857",
    linkCadastro: "https://wagner.associarse.com.br"
  }
}

// Define o seu cadastro como o padrão da página principal (sem rota)
export const REPRESENTANTE_PADRAO: Representante = REPRESENTANTES["110956"];
