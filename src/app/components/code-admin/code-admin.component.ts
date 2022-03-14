import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-admin',
  templateUrl: './code-admin.component.html',
  styleUrls: ['./code-admin.component.scss']
})
export class CodeAdminComponent implements OnInit {

  mdp='';
  message='';
  constructor(
    private router : Router
  
  ) { }

  ngOnInit(): void {
    document.body.requestFullscreen();
  }
  login(){
    if(this.mdp.toLocaleLowerCase() ==='superbibi'){
    this.router.navigate(['/admin']);
    }
    
    else{
      this.message = 'Mot de passe erroné.'
    }
  }



}
