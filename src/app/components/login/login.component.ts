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
  ) { }

  ngOnInit(): void {
 //   document.body.requestFullscreen();
  }
  login(){
    if(this.mdp.toLocaleLowerCase() ==='ecam49'){
    this.router.navigate(['/home']);
    }
    
    else{
      this.message = 'Mot de passe erroné.'
    }
  }
  //----------------------
  fullscreen(){
    window.document.body.requestFullscreen();
    //screen.orientation.lock('portrait');
  }


    
  

}
