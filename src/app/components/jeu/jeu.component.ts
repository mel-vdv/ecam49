import { AuthServService } from './../../services/auth-serv.service';
import { CrudservService } from './../../services/crudserv.service';

import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/models/equipe';
import { ActivatedRoute, Router } from '@angular/router';
//import { Subscription } from 'rxjs';
@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {
  sec!:number; zeroS = '';
  min!:number; zeroM = '';
 /// sub: Subscription;

 
  message = '';
 
  tableauStands: any;
  //-------------------------------------------
  constructor(
    private crud: CrudservService,
    public auth: AuthServService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // ça ne marcahit pas bien quand activate route était ici
  }
  //--------------------------------------------

  unefois = false;
  //ne marche pas si any, car id string attendu(crud, auth..)

   ngOnInit() {
   this.activatedRoute.paramMap.subscribe((params: any) => {
       this.auth.id = params.get('id');
    });
  
    this.crud.getEquipeById(this.auth.id).subscribe((data: Equipe) => {  this.auth.nom= data.nom;
      this.auth.stands= data.stands;
      this.auth.enCours=data.enCours;
      this.auth.gain=data.gain;
      if(data.timerBegin){this.auth.timerBegin = data.timerBegin;}

      if (!data.enCours) {
        this.router.navigate([`/fin/${this.auth.id}`]); return;
      }
      if(data.enCours){
        if (!this.auth.timerBegin) {
          this.crud.timerDebut(this.auth.id!);
          if (!this.unefois) { this.go(59, 59); } this.unefois = true; return;
        }
        else {
          let maintenant = Date.now();
          let reste = 3600- (Math.floor((maintenant - this.auth.timerBegin!) / 1000));
          if (reste > 0) {
            const xmin = Math.floor(reste / 60);
            const xsec = reste - (60 * xmin);
            if (!this.unefois) { this.go(xmin, xsec); this.unefois = true; return;}
          }
          else {
            this.perdre(); return;
          }
        }
      }
    });
  }
  //***************  timer  ******************** */

  test: any;
  go(m: number, s: number) {
    this.min = m;
    this.sec = s;
    this.test = setInterval(() => {
      if (this.sec > 9) { this.sec--; this.zeroS = ''; }
      if (this.min > 9) { this.zeroM = ''; }
      if (this.sec < 10 && this.sec >= 0) { this.sec--; this.zeroS = '0'; }
      if (this.min < 10 && this.min >= 0) { this.zeroM = '0'; }
      if (this.sec === 0 && this.min > 0) { this.zeroS = ''; this.min--; this.sec = 59; }

      /////////////////////////////// PERDU ///////////////////////////////////////
      if (this.min < 1 && this.sec < 1) {
        this.perdre();
        clearInterval(this.test);
      }
      //////////////////////////////////  GAGNE ///////////////////////////////////
      if (this.auth.gain) {
        clearInterval(this.test);
      }
    }, 1000);
  }
  //--------------------------------------
  perdre() {
    this.auth.gain = false;
    this.auth.enCours = false;
    this.crud.echouer(this.auth.id!);
    this.router.navigate([`/fin/${this.auth.id!}`]);
    return;
  }
  //--------------------------------------
  consignesDiv=true;
  standsDiv=false;
  changer(x:string){
    if(x==='consignes'){this.consignesDiv=true; this.standsDiv=false;}
    if(x==='stands'){this.consignesDiv=false; this.standsDiv=true;}
  }
}

