
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';
import { Election } from '../models/election';
@Injectable({
  providedIn: 'root'
})
export class CrudservService {

  constructor(
    private afs: AngularFirestore
  ) { }

create(newEquipe: Equipe) {
  return this.afs.collection('equipes').add(newEquipe);
  
  }
  //----------------------
 getAll(){
  return this.afs.collection('equipes').valueChanges() as Observable<Equipe[]>;
  }
  //--------------------
  getEquipeById(id: any) {
    return this.afs.doc(`equipes/${id}`).valueChanges() as Observable<Equipe>;
  }
 
  //----------------------
   getEquipeByName(name: any) {
    return this.afs.collection('equipes', (ref) => ref.where('nom', '==', name)).valueChanges({ idField: 'id' }) as Observable<Equipe[]>;
  }
  //------------------------------
   reussite(envoi:any){ //any marche, string non
    return this.afs.collection("equipes").doc(envoi.id).update({
      gain: true,
      enCours: false,
      timerFin: envoi.fin, 
      timerResultat: envoi.calcul
    });
  }
  //--------------------------------
   voter(envoi:any){
    return this.afs.collection("equipes").doc(envoi.id).update({
     vote: envoi.chiffre, voteFait:true
    });
  }
  //--------------------------------
 voterBis(chiffre:number){
    return this.afs.collection('elections').doc(`stand-${chiffre}`).update({
      vote : increment(1)
    });
  }
  //--------------------------------
 getElu(){
      return this.afs.collection('elections', ref=> ref.orderBy('vote','desc')).valueChanges() as Observable<Election[]>;
    }
    //------------------------------
   timerDebut(id:string){ //obligé string et non any !!!!  car auth.id : string
     console.log('timer debut ici');
    return this.afs.collection('equipes').doc(id).update({
      timerBegin: Date.now()
    });
  }
  //----------------------
   timerStop(envoi:any){
    return this.afs.collection('equipes').doc(envoi.id).update({
      timerFin: Date.now()
    });
  }
  //-----------------------
  calculTemps(envoi:any){
    return this.afs.collection('equipes').doc(envoi.id).update({
      timerResultat: envoi.resultat
    });
  }
  //-----------------------
   getPodium(){
    return this.afs.collection('equipes', ref => ref.orderBy('timerResultat','asc')).valueChanges() as Observable<Equipe[]>;
  }
//---------------------------
  echouer(id:string){
  return this.afs.collection('equipes').doc(id).update({
    gain:false, enCours: false
  });
}

  
}
