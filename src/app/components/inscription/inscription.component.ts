import { AuthServService } from './../../services/auth-serv.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudservService } from 'src/app/services/crudserv.service';

@Component({
  selector: 'app-inscr',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthServService,
    private crud: CrudservService
  ) { }
  //-----------------------------------
  inscri!: boolean;
  refus?: boolean;
  message = '';
  lignes2?: number; lignes3?: number; lignes4?: number; lignes5?: number; lignes6?: number;
  lignes7?: number; lignes8?: number; lignes9?: number; lignes10?: number;
  //----------------------------------
  ngOnInit(): void {
    console.log('on init');
    window.addEventListener('load', function () {
      console.log('load');
    });
    this.inscri = false;
    if (!this.refus) { this.refus = false; }
    this.page = 1;
    if (!this.lignes2) { this.lignes2 = 1; }
    if (!this.lignes3) { this.lignes3 = 1; }
    if (!this.lignes4) { this.lignes4 = 1; }
    if (!this.lignes5) { this.lignes5 = 1; }
    if (!this.lignes6) { this.lignes6 = 1; }
    if (!this.lignes7) { this.lignes7 = 1; }
    if (!this.lignes8) { this.lignes8 = 1; }
    if (!this.lignes9) { this.lignes9 = 1; }
    if (!this.lignes10) { this.lignes10 = 1; }

  }
  //------------------------------------
  nom='';
  nbJoueurs!: number;
  joueurs: string[] = [];
  stands!: number[];

  nom1 = ''; prenom1 = '';
  nom2 = ''; prenom2 = '';
  nom3 = ''; prenom3 = '';
  nom4 = ''; prenom4 = '';
  motEnCours: string[] = [];
  page!: number;
  pages!: number[];

  //-----------------------
  suivant(n: number) {
    if (this.page !== 11 && n == 1 || n == -1 && this.page !== 1) {
      switch (this.nbJoueurs) {
        case 1: this.pages = [1, 2, 3, 4, 11]; break;
        case 2: this.pages = [1, 2, 3, 4, 5, 6, 11]; break;
        case 3: this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 11]; break;
        case 4: this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; break;
        default: this.message = 'Le nombre de joueurs doit etre compris entre 1 et 4'; setTimeout(() => { this.message = ''; }, 4000); return;

      }
      let index = this.pages?.findIndex(e => e === this.page);
      this.page = this.pages[(index + n)];
      this.motEnCours = [''];
    }
  }
  //---------------------
  enter() {
    if (!this.inscri) {
      if (this.page != 11) {
        if (this.refus) {
          this.verifName();
        }
        else {
          if(this.page==2 && (this.nom =='' || this.nom ==' ')){return;} else{this.suivant(1);}
        }
      }
      else {
          this.valider();
        }
      
    }

    else {
      this.jouer();
    }
  }
  //-----------------------
  tape(touche: string) {
    this.motEnCours.push(touche);
    this.maj();
  }
  //-----------------
  touch(x: number) {
    if (this.page === 1) {
      this.nbJoueurs = x;
    }
  }
  //----------------------
  delete() {
    if (this.motEnCours.length > 0) {
      this.motEnCours.pop();
      this.maj();
    }
  }
  //------------------
  maj() {
    switch (this.page) {
      case 2:
        if (this.motEnCours.length > 10) {
          this.lignes2 = 2;
        }this.nom = this.motEnCours.join('');

        break;
      case 3:
        if (this.motEnCours.length > 10) {
          this.lignes3 = 2;
        } this.prenom1 = this.motEnCours.join(''); break;
      case 4: if (this.motEnCours.length > 10) {
        this.lignes4 = 2;
      } this.nom1 = this.motEnCours.join(''); break;
      case 5: if (this.motEnCours.length > 10) {
        this.lignes5 = 2;
      } this.prenom2 = this.motEnCours.join(''); break;
      case 6:
        if (this.motEnCours.length > 10) {
          this.lignes6 = 2;
        } this.nom2 = this.motEnCours.join(''); break;
      case 7:
        if (this.motEnCours.length > 10) {
          this.lignes7 = 2;
        } this.prenom3 = this.motEnCours.join(''); break;
      case 8:
        if (this.motEnCours.length > 10) {
          this.lignes8 = 2;
        } this.nom3 = this.motEnCours.join(''); break;
      case 9:
        if (this.motEnCours.length > 10) {
          this.lignes9 = 2;
        } this.prenom4 = this.motEnCours.join(''); break;
      case 10:
        if (this.motEnCours.length > 10) {
          this.lignes10 = 2;
        } this.nom4 = this.motEnCours.join(''); break;


      default: console.log('shit');
    }
  }

  //--------------------
  valider() {
    switch (this.nbJoueurs) {
      case 1: if (this.prenom1 == '') { this.page = 3; }
      else if (this.nom1 == '') { this.page = 4; }
      else { this.verifName(); }; break;

      case 2: if (this.prenom1 == '') { this.page = 3; }
      else if (this.nom1 == '') { this.page = 4; }
      else if (this.prenom2 == '') { this.page = 5; }
      else if (this.nom2 == '') { this.page = 6; }
      else { this.verifName(); }; break;

      case 3: if (this.prenom1 == '') { this.page = 3; }
      else if (this.nom1 == '') { this.page = 4; }
      else if (this.prenom2 == '') { this.page = 5; }
      else if (this.nom2 == '') { this.page = 6; }
      else if (this.prenom3 == '') { this.page = 7; }
      else if (this.nom3 == '') { this.page = 8; }
      else { this.verifName(); }; break;

      case 4: if (this.prenom1 == '') { this.page = 3; }
      else if (this.nom1 == '') { this.page = 4; }
      else if (this.prenom2 == '') { this.page = 5; }
      else if (this.nom2 == '') { this.page = 6; }
      else if (this.prenom3 == '') { this.page = 7; }
      else if (this.nom3 == '') { this.page = 8; }
      else if (this.prenom4 == '') { this.page = 9; }
      else if (this.nom4 == '') { this.page = 10; }
      else { this.verifName(); }; break;


      default: console.log('pb');
    }
  }
  //-------------------------
  verifName() {
    console.log('on verifie le name ', this.nom);
    this.crud.getEquipeByName(this.nom).subscribe(data => {
      if (data.length == 0 || !data) {
        this.refus = false;
        this.inscrire();
      }
      else {
        this.refus = true;
        setTimeout(() => {
          this.nom = '';
          this.page = 2;
        }, 5000);
      }

    });
  }
  //----------------------------
  stand1: number[] = [6, 9,  12, 28, 31, 33, 35, 36, 42, 23, 29, 48, 49];
  stand2: number[] = [4, 5, 7, 10,11, 14, 17, 18, 19, 20, 21, 37, 38,39, 45, 46];
  stand3: number[] = [2, 13, 30,34, 43, 47, 50, 25, 3];
  stand4: number[] = [1, 8, 15, 16, 22, 26, 32, 44];
  inscrire() {
    this.stands = [];
    // while (this.stands.length < 9) {
    //let random = Math.floor(Math.random() * 49) + 1;
    // if (!this.stands.includes(random)) {
    //  this.stands.push(random);
    //  }
    // }
    switch (this.nbJoueurs) {
      case 1: this.joueurs = [this.prenom1+" "+this.nom1!];
        while (this.stands.length < 9) {
          let random1 = Math.floor(Math.random() * (this.stand1.length - 1));
          this.stands.push(this.stand1[random1]);
          this.stand1.splice(random1, 1);
        }
        break;
      case 2: this.joueurs = [this.prenom1+' '+this.nom1!, this.prenom2+' '+this.nom2!];
        while (this.stands.length < 9) {
          let random2 = Math.floor(Math.random() * (this.stand2.length - 1));
          this.stands.push(this.stand2[random2]);
          this.stand2.splice(random2, 1);
        }
        break;
      case 3: this.joueurs = [this.prenom1+' '+this.nom1!, this.prenom2+' '+ this.nom2!,this.prenom3+' '+ this.nom3!];
        while (this.stands.length < 9) {
          let random3 = Math.floor(Math.random() * (this.stand3.length - 1));
          this.stands.push(this.stand3[random3]);
          this.stand3.splice(random3, 1);
        }
        break;
      case 4: this.joueurs = [this.prenom1+' '+this.nom1!, this.prenom2+' '+this.nom2!,this.prenom3+' '+ this.nom3!, this.prenom4+' '+this.nom4!];
        while (this.stands.length < 8) {
          let random4 = Math.floor(Math.random() * (this.stand4.length - 1));
          this.stands.push(this.stand4[random4]);
          this.stand4.splice(random4, 1);
        }
        break;
      default: console.log('pb de joueurs');
    }
    if (this.joueurs.length > 0) {
      let envoi = {
        nom: this.nom,
        nbJoueurs: this.nbJoueurs,
        joueurs: this.joueurs,
        stands: this.stands,
        gain: false,
        enCours: true,
        voteFait: false
      };
      this.crud.create(envoi);
      this.auth.nom = this.nom;
      this.inscri = true;
    }
  };
  //--------------------------
  jouer() {
    this.crud.getEquipeByName(this.auth.nom).subscribe((data: any) => {
      localStorage.setItem('id', data[0].id);
      // this.auth.id = localStorage.getItem('id');
      this.router.navigate([`/jeu/${data[0].id}`]);
    });
  }
  //------------------------------------


}