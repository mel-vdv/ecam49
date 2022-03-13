import { AuthServService } from './../../services/auth-serv.service';
import { CrudservService } from './../../services/crudserv.service';
import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss']
})
export class EnigmeComponent implements OnInit {

  message = ''; 
  tableauChiffres=[''];
  code ='';
  constructor(
   // private fb: FormBuilder,
    private crud: CrudservService,
    private router: Router,
    public auth: AuthServService //si private pb dans enigme.html(pour auth.idequipe)

  ) {
   
  }

  idEquipe!:string;
  ngOnInit(): void {
    this.getId();}

    getId(){
      return this.idEquipe = this.auth.id!;
    }

  envoyerReponse() {
    if ( this.code === '500501142342') {
      this.gagner();
    }
    else {
      this.tableauChiffres=[''];
      this.message = 'code faux';
      this.code='';
    }

  }

//--------------------------
 gagner(){
  this.auth.gain= true;
  this.auth.enCours=false;
  let t= Date.now();
  let r = Math.floor((t -this.auth.timerBegin!)/1000);
 let envoi={
   id : this.auth.id!, fin:t , calcul: r
 }
  this.crud.reussite(envoi);
  this.router.navigate(['/fin']);
}
//--------------------------


touche(chiffre:string){
  if(this.tableauChiffres.length<13){
    this.message='';
    this.tableauChiffres.push(chiffre);
    this.code = this.tableauChiffres.join('');}
}
effacer(){
  this.tableauChiffres.pop();
  this.code = this.tableauChiffres.join('');
}


}
