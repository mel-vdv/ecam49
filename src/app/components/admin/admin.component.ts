import { CrudservService } from './../../services/crudserv.service';
import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/models/equipe';
import { Election } from 'src/app/models/election';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  donnees!:Equipe[];
  // pb en html , ne saffiche pas si je met Observable<Election[]>
  elus!: Election[];
  gagnants$!: Equipe[];
  equipes!:boolean;
  constructor(
    private crud: CrudservService
  ) {

  }

  //-----------------------------------------------
ngOnInit() {
  this.equipes= true;
    this.crud.getAll().subscribe((data:Equipe[]) => {
      this.donnees = data;
    });
   this.crud.getElu().subscribe(data => { //ne marche pas si data:any
      this.elus = data;
    });
  }

  //-----------------------------------------------
  transfo(x:any){//marche pas si number
    let m = Math.floor(x/60);
    let s = x-(m*60);
    return `${m}' ${s}''`;
  }
}
