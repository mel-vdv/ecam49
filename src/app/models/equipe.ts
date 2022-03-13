export interface Equipe {
    id?:string;

    nom:string;
    nbJoueurs:number;
    joueurs:string[];
    stands:number[];
    gain:boolean;
    enCours:boolean;
    voteFait:boolean;

    vote?:number;
    classe?:string;
    image?:string; 
    timerResultat?:number;
    timerBegin?:number;
    timerFin?:number;
}
