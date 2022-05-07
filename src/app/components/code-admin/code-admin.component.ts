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
    window.addEventListener('keypress', (e)=>{
      if(e.key ==="Enter"){
         this.login();
      }
     });
  }
  login(){
    if(this.mdp.toLocaleLowerCase() ==='admin@pi2022'||this.mdp.toLocaleLowerCase() ==='admin@pi2022'+' '){
    this.router.navigate(['/admin']);
    }
    
    else{
      this.message = 'Mot de passe erroné.'
    }
  }
//------------------
velmdp=true;
place(){
this.velmdp= false;
}


}
