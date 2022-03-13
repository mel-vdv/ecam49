
import { CodeAdminComponent } from './components/code-admin/code-admin.component';

import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { FinComponent } from './components/fin/fin.component';
import { AdminComponent } from './components/admin/admin.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { LoginComponent } from './components/login/login.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRouteList: Routes = [
   {path:'',component:LoginComponent},
   {path:'acces',component: CodeAdminComponent},
   {path:'home', component:HomeComponent},
   {path:'inscription', component:InscriptionComponent},
   {path:'connexion',component:ConnexionComponent},
   {path:'jeu/:id', component:JeuComponent},
   {path:'admin', component: AdminComponent},
   {path:'fin/:id',component:FinComponent}
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}