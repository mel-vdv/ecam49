import { Router } from '@angular/router';
import { AuthServService } from './../../services/auth-serv.service';
import { CrudservService } from './../../services/crudserv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  nom = '';

  //--------------------------------------------------
  constructor(
    private router: Router,
    private crud: CrudservService,
    public auth: AuthServService
  ) { }
  //--------------------------------------------------
  ngOnInit(): void {
   // document.body.requestFullscreen();
   window.document.addEventListener('keypress', (event)=>{
if(event.key==='Enter') {
     this.connexion();
    }   });
  }
  //--------------------------------------------------
  clik=false;
  error=false;
  cliquer(){
    this.clik=false; this.error=false;
  }
  connexion() {
    this.nom = (this.nom).toLowerCase();
    this.clik=true;
    this.crud.getEquipeByName(this.nom).subscribe((data: any) => {
      if (!data[0] || data.length === 0) {
      this.nom='';
      this.error=true;
      }
      else {
        this.error=false;
       
        this.auth.id = data[0].id;
        this.auth.nom = data[0].nom;
        this.auth.enCours = data[0].enCours;
        this.auth.gain = data[0].gain;
        this.auth.voteFait = data[0].voteFait;
        this.auth.stands = data[0].stands;

        if (data[0].timerBegin) { this.auth.timerBegin = data[0].timerBegin; }
        if (data[0].timerFin) { this.auth.timerFin = data[0].timerFin; }
        if (data[0].vote) { this.auth.vote = data[0].vote; }

        if ((data[0].enCours) === false) {
          this.router.navigate([`/fin/${this.auth.id!}`]);
        }
        else {
          this.router.navigate([`/jeu/${this.auth.id}`]);
        }
      }
    });
  }
  //--------------------------
  retour(){
    this.router.navigate(['/home']);
  }
}
