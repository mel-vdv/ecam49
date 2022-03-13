

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//formulaires:
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
//FIREBASE
import { AngularFireModule} from '@angular/fire/compat';
//material:
//import {MatInputModule} from '@angular/material/input';
//automatiquement:
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//  components :
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { FinComponent } from './components/fin/fin.component';
import { AdminComponent } from './components/admin/admin.component';
//services :
import { CrudservService } from './services/crudserv.service';
import { AuthServService } from './services/auth-serv.service';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeAdminComponent } from './components/code-admin/code-admin.component';
import { InscrComponent } from './components/inscr/inscr.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    JeuComponent,
    EnigmeComponent,
    FinComponent,
    AdminComponent,
    HomeComponent,
    ConnexionComponent,
    CodeAdminComponent,
    InscrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //form:
    FormsModule,
    //ReactiveFormsModule,
    //material:
    //MatInputModule,
    //firebase:
    AngularFireModule.initializeApp(environment.firebase),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [
    AuthServService, CrudservService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
