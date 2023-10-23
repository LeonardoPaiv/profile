import { IPropsXpBar } from "../models/XpBar";
import { Competencia, ICompetencia, color, listCompetencias } from "../models/competencias";

export const listaXp: IPropsXpBar[] = [
    {ability: 'React', level: 99, w: 100},
    {ability: 'NodeJS', level: 99, w: 100},
    {ability: 'Angular', level: 99, w: 100},
    {ability: 'OracleSQL', level: 99, w: 100},
    {ability: 'OpenShift', level: 99, w: 100},
]

export const corSelecinado = color.P

export const competenciasSelecionadas: ICompetencia[] = [
    listCompetencias[Competencia.PERFIL_TECNICO],
    listCompetencias[Competencia.EMPATIA],
    listCompetencias[Competencia.DINAMISMO],
    listCompetencias[Competencia.EXTROVERSAO],
    listCompetencias[Competencia.ORGANIZACAO],
]