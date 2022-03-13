import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscr',
  templateUrl: './inscr.component.html',
  styleUrls: ['./inscr.component.scss']
})
export class InscrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.refus= false;
    this.page=1;
  }
refus?:boolean;
  nom?:string;
  nbJoueurs?:number;
  nom1?:string;
  nom2?:string;
  nom3?:string;
  nom4?:string;
 motEnCours:string[]= [''];
 page!:number;
pages!:number[];
//--------------------
  valider(){
    this.refus= true;
  }
  //-----------------------
  suivant(n:number){
    if(this.page!==7 && n==1 ||n==-1 && this.page!==1){
      switch(this.nbJoueurs){
      case 1: this.pages = [1,2,3,7];break;
      case 2: this.pages = [1,2,3,4,7];break;
      case 3 :this.pages = [1,2,3,4,5,7];break;
      case 4 :this.pages = [1,2,3,4,5,6,7];break;
    
    }
    let index = this.pages?.findIndex(e=>e===this.page);
    this.page = this.pages[(index+n)];
    }
    
  }
 //---------------------
  tape(touche:string){
 this.motEnCours.push(touche);
this.maj();
  }
  //-----------------
  delete(){
    if(this.motEnCours.length>0){
  this.motEnCours.pop();
  this.maj();
    }
  }
  //------------------
  maj(){
    switch(this.page){
      case 2 : this.nom = this.motEnCours.join(''); break;
      case 3 : this.nom1 = this.motEnCours.join(''); break;
      case 4 : this.nom2 = this.motEnCours.join(''); break;
      case 5 : this.nom3 = this.motEnCours.join(''); break;
      case 6 : this.nom4 = this.motEnCours.join(''); break;
      default: console.log('shit');
  }
}
}


