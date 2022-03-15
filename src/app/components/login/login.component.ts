import { CrudservService } from './../../services/crudserv.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mdp='';
  message='';
  constructor(
    private router : Router,
    private crud: CrudservService
  ) { 

  }

  login(){
    if(this.mdp.toLocaleLowerCase() ==='ecam49'||this.mdp.toLocaleLowerCase() ==='ecam49'+' '){
    this.router.navigate(['/home']);
    }
    
    else{
      this.message = 'Mot de passe erroné.'
    }
  }
  //----------------------

  ngOnInit(): void {
    window.addEventListener('keydown', (e)=>{
      if(e.key ==="enter"){
         this.login();
      }
     });
}




    
  

}
