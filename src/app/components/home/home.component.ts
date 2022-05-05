import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router : Router
  ) { }
//------------------------------------------






  ngOnInit(): void {


  }
  nav(lieu:string){
 this.router.navigate(['/'+lieu+'']);
  }

}
