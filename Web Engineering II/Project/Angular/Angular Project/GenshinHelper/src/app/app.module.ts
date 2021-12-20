import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { CharactersComponent } from './characters/characters.component';
import { SingleArtifactComponent } from './single-artifact/single-artifact.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { SingleWeaponComponent } from './single-weapon/single-weapon.component';
import { CreateArtifactComponent } from './create-artifact/create-artifact.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateWeaponComponent } from './create-weapon/create-weapon.component';
import { EditArtifactComponent } from './edit-artifact/edit-artifact.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { EditWeaponComponent } from './edit-weapon/edit-weapon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ArtifactsComponent,
    WeaponsComponent,
    CharactersComponent,
    SingleArtifactComponent,
    SingleCharacterComponent,
    SingleWeaponComponent,
    CreateArtifactComponent,
    CreateCharacterComponent,
    CreateWeaponComponent,
    EditArtifactComponent,
    EditCharacterComponent,
    EditWeaponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
