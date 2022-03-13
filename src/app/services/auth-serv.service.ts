
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {
 // id = localStorage.getItem('id');
 // nom = localStorage.getItem('nom');
 // stands = JSON.parse(localStorage.getItem('stands')!);
 //vote = parseInt(localStorage.getItem('vote')!);
  //timerBegin = parseInt(localStorage.getItem('timerBegin')!);
  id?:string;
  nom?:string;
  stands?:number[];
  vote?:number;
  timerBegin?:number;
  nbJoueurs?: number;
  joueurs?: string[]; 
  gain?:boolean;
  enCours?: boolean;
  voteFait?:boolean;
  classe?: string;
  timerResultat?: string;
  timerFin?: number;
  constructor() {
  }

}
