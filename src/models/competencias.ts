export enum categoria {
  ANALISTA = "analista",
  COMUNICADOR = "comunicador",
  EXECUTOR = "executor",
  PLANEJADOR = "planejador",
}

export enum color {
  O = "orange",
  P = "purple",
}

export interface ICompetencia {
  categoria: categoria;
  competencia: string;
  nome: string;
}

export interface IPropsCompetencia extends ICompetencia{
  color: color;
}

export enum Competencia {
  TOLERANCIA,
  PLANEJAMENTO,
  EMPATIA,
  CAPACIDADE_DE_OUVIR,
  CONCENTRACAO,
  CONDESCENDENCIA,
  PERFIL_TECNICO,
  ORGANIZACAO,
  DETALHISMO,
  RIGOROSIDADE,
  ORIENTADO_POR_RESULTADO,
  MULTITAREFAS,
  AUTOMOTIVACAO,
  PROATIVIDADE,
  DINAMISMO,
  DOMINANCIA,
  EXTROVERSAO,
  RELACIONAMENTO_INTERPESSOAL,
  SOCIABILIDADE,
  ORIENTADO_POR_RELACIONAMENTO,
}

export const listCompetencias: ICompetencia[] = [
  {
    categoria: categoria.PLANEJADOR,
    competencia: "Capacidade de tolerar diferentes maneiras de pensar, agir e sentir, mesmo sendo opostas às adotadas por si mesmo.",
    nome: "Tolerância",
  },
  {
    categoria: categoria.PLANEJADOR,
    competencia: "Capacidade de planejar as ações, processos e atividades",
    nome: "Planejamento",
  },
  {
    categoria: categoria.PLANEJADOR,
    competencia: "Capacidade de compreender o sentimento ou reação da outra pessoa imaginando-se nas mesmas circunstâncias.",
    nome: "Empatia",
  },
  {
    categoria: categoria.PLANEJADOR,
    competencia: "Capacidade de escuta ativa, habilidade de ouvir com atenção.",
    nome: "Capacidade de ouvir",
  },
  {
    categoria: categoria.PLANEJADOR,
    competencia: "Nível de capacidade/necessidade de concentração para execução de um trabalho que exige atenção e constância. Essa competência mensura não só a capacidade de concentração da pessoa como também sua necessidade de estar em um ambiente adequado para tal atividade.",
    nome: "Concentração",
  },
  {
    categoria: categoria.PLANEJADOR,
    competencia: "Indica o quanto a pessoa considera e pondera as intenções, desejos e opinião de outrem, agindo com complacência para buscar a melhor ação possível.",
    nome: "Condescendência",
  },
  {
    categoria: categoria.ANALISTA,
    competencia: "Aptidão para habilidades técnicas. Indica a capacidade de a pessoa se 'tecnificar', dar ou proporcionar recursos técnicos a uma atividade para otimizá-la.",
    nome: "Perfil Técnico",
  },
  {
    categoria: categoria.ANALISTA,
    competencia: "É a capacidade de um indivíduo de organizar suas ideias de maneira clara e bem definida. Essa competência resvala no ambiente físico também como a capacidade de manter o ambiente limpo e arrumado.",
    nome: "Organização",
  },
  {
    categoria: categoria.ANALISTA,
    competencia: "Capacidade de exposição minuciosa de fatos, planos ou projetos, com atenção a detalhes.",
    nome: "Detalhismo",
  },
  {
    categoria: categoria.ANALISTA,
    competencia: "Competência de uma pessoa exata, precisa, exigente e de raciocínio rigoroso.",
    nome: "Rigorosidade",
  },
  {
    categoria: categoria.ANALISTA,
    competencia: "É a competência que identifica o quanto a pessoa se desenvolve pelo trabalho e pela ação, investindo mais tempo na execução das tarefas.",
    nome: "Orientado por resultado",
  },
  {
    categoria: categoria.EXECUTOR,
    competencia: "Capacidade de executar várias tarefas ao mesmo tempo.",
    nome: "Multitarefas",
  },
  {
    categoria: categoria.EXECUTOR,
    competencia: "Indica o nível da capacidade de a pessoa se auto-motivar, a capacidade de motivar-se ao entusiasmo.",
    nome: "Automotivação",
  },
  {
    categoria: categoria.EXECUTOR,
    competencia: "Indica a capacidade de agir antecipadamente, resolvendo situações e problemas futuros sem que seja obrigatoriamente requerido.",
    nome: "Proatividade",
  },
  {
    categoria: categoria.EXECUTOR,
    competencia: "Particularidade e característica de quem demonstra energia, movimento e vitalidade, lida bem com mudanças e ambientes dinâmicos.",
    nome: "Dinamismo",
  },
  {
    categoria: categoria.EXECUTOR,
    competencia: "Competência de quem exerce uma postura dominante, firme. Normalmente toma decisões rápidas por ser menos avesso a risco e assume uma postura de comando.",
    nome: "Dominância",
  },
  {
    categoria: categoria.COMUNICADOR,
    competencia: "Característica de quem é extrovertido, expansivo, comunicativo e sociável. Uma pessoa extrovertida tem facilidade em se sociabilizar.",
    nome: "Extroversão",
  },
  {
    categoria: categoria.COMUNICADOR,
    competencia: "Capacidade de estabelecer conexões ou vínculos com outras pessoas dentro de um determinado contexto.",
    nome: "Relacionamento interpessoal",
  },
  {
    categoria: categoria.COMUNICADOR,
    competencia: "Indica a necessidade e a tendência à busca por relacionamento social com as outras pessoas, de forma expansiva e extrovertida",
    nome: "Sociabilidade",
  },
  {
    categoria: categoria.COMUNICADOR,
    competencia: "O nível de foco da pessoa em relacionamentos. Esta competência indica o quanto a pessoa se desenvolve por relacionamentos e os prioriza em suas tarefas.",
    nome: "Orientado por relacionamento",
  },
];