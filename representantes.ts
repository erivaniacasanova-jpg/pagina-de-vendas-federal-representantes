export interface Representante {
  id: string
  nome: string
  whatsapp: string
  linkCadastro: string
}

export const REPRESENTANTES: Record<string, Representante> = {
  "francisco": {
    id: "110956",
    nome: "Francisco Eliedisom Dos Santos",
    whatsapp: "5584981321396",
    linkCadastro: "https://associarse.com.br/110956" // ou https://associarse.com.br
  },
  "william": {
    id: "134684",
    nome: "William Dos Santos Pessoa",
    whatsapp: "5521969400194",
    linkCadastro: "https://associarse.com.br/134684"
  },
  "erivania": {
    id: "135302",
    nome: "Antonia Erivania Delmiro Jacinto",
    whatsapp: "558498410187",
    linkCadastro: "https://associarse.com.br/135302"
  },
  "aline": {
    id: "153542",
    nome: "Aline Aparecida Melo",
    whatsapp: "553193371195",
    linkCadastro: "https://associarse.com.br/153542"
  },
  "gilmar": {
    id: "191651",
    nome: "Gilmar Goncalves De Paula",
    whatsapp: "5522998914547",
    linkCadastro: "https://associarse.com.br/191651"
  },
  "wagner": {
    id: "88389",
    nome: "Wagner Cruz Vieira",
    whatsapp: "5521996098857",
    linkCadastro: "https://wagner.associarse.com.br"
  }
}

// Define o representante padrão que aparece quando acessam a raiz (suanetturbinada.com.br)
export const REPRESENTANTE_PADRAO: Representante = REPRESENTANTES["francisco"];
