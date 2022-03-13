import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/models/equipe';
import { CrudservService } from './../../services/crudserv.service';
import { AuthServService } from './../../services/auth-serv.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.scss']
})
export class FinComponent implements OnInit {
  
  constructor(
    public auth : AuthServService,
    private activatedRoute: ActivatedRoute ,
    private crud: CrudservService
  ) { }
//--------------------------------
 ngOnInit() {
   console.log('f5');
  this.activatedRoute.paramMap.subscribe((params: any) => {
      this.auth.id = params.get('id');
      console.log('ngoninit fin, id : ',this.auth.id);
  }  );
  this.crud.getEquipeById(this.auth.id).subscribe((data: Equipe) => {
     this.auth.nom= data.nom;
     this.auth.stands= data.stands;
     this.auth.enCours=data.enCours;
     this.auth.gain=data.gain;
    this.auth.voteFait= data.voteFait;
  if(
    data.vote){this.auth.vote= data.vote;}
  });

}
//---------------------------------
  selection=0;
select(e:any, chiffre:number){
  
document.querySelectorAll('span').forEach(s=> s.classList.remove('choisi'));

e.currentTarget.classList.add('choisi');

this.selection= chiffre;

}
//----------------------------
voter(){
  let envoi={
    chiffre: this.selection!,
    id: this.auth.id!
  };
  this.auth.voteFait = true;
  this.auth.vote = this.selection;
  //localStorage.setItem('vote', this.selection.toString());
console.log('voter : ', this.selection);
console.log('id : ',this.auth.id!)
  this.crud.voter(envoi);
  this.crud.voterBis(this.selection!);
 }
 //----------------------------------------------
 
 

}
