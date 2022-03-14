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
  //----------------------------------
  ngOnInit(): void {
    this.inscri = false;
    this.refus = false;
    this.page = 1;
  }
  //------------------------------------
  nom!: string;
  nbJoueurs!: number;
  joueurs: string[] = [];
  stands!: number[];

  nom1?: string;
  nom2?: string;
  nom3?: string;
  nom4?: string;
  motEnCours: string[] = [];
  page!: number;
  pages!: number[];

  //-----------------------
  suivant(n: number) {
    if (this.page !== 7 && n == 1 || n == -1 && this.page !== 1) {
      switch (this.nbJoueurs) {
        case 1: this.pages = [1, 2, 3, 7]; break;
        case 2: this.pages = [1, 2, 3, 4, 7]; this.joueurs.push(this.nom2!); break;
        case 3: this.pages = [1, 2, 3, 4, 5, 7]; this.joueurs.push(this.nom3!); break;
        case 4: this.pages = [1, 2, 3, 4, 5, 6, 7]; this.joueurs.push(this.nom4!); break;
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
      if (this.page != 7) {
        this.suivant(1);
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
    delete () {
      if (this.motEnCours.length > 0) {
        this.motEnCours.pop();
        this.maj();
      }
    }
    //------------------
    maj() {
      switch (this.page) {
        case 2: this.nom = this.motEnCours.join(''); break;
        case 3: this.nom1 = this.motEnCours.join(''); break;
        case 4: this.nom2 = this.motEnCours.join(''); break;
        case 5: this.nom3 = this.motEnCours.join(''); break;
        case 6: this.nom4 = this.motEnCours.join(''); break;
        default: console.log('shit');
      }
    }

    //--------------------
    valider() {
      if (this.refus) {
        setTimeout(() => {
          this.refus = false; this.page = 2;
        }, 5000);
      }
      else {
        this.inscrire();
      }
    }
    //----------------------------
    inscrire() {
      this.stands = [];
      while (this.stands.length < 9) {
        let random = Math.floor(Math.random() * 49) + 1;
        if (!this.stands.includes(random)) {
          this.stands.push(random);
        }
      }
      switch (this.nbJoueurs) {
        case 1: this.joueurs = [this.nom1!]; break;
        case 2: this.joueurs = [this.nom1!, this.nom2!]; break;
        case 3: this.joueurs = [this.nom1!, this.nom2!, this.nom3!]; break;
        case 4: this.joueurs = [this.nom1!, this.nom2!, this.nom3!, this.nom4!]; break;
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
        this.inscri = true;
      }
    };
    //--------------------------
    jouer(){
      this.crud.getEquipeByName(this.nom).subscribe((data: any) => {
        localStorage.setItem('id', data[0].id);
        // this.auth.id = localStorage.getItem('id');
        this.router.navigate([`/jeu/${data[0].id}`]);
      });
    }
  }