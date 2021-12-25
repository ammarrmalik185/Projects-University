import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ArtifactsComponent } from "./artifacts/artifacts.component";
import { WeaponsComponent } from "./weapons/weapons.component";
import { CharactersComponent } from "./characters/characters.component";
import { SingleWeaponComponent } from "./single-weapon/single-weapon.component";
import { SingleArtifactComponent } from "./single-artifact/single-artifact.component";
import { SingleCharacterComponent } from "./single-character/single-character.component";
import { EditArtifactComponent } from "./edit-artifact/edit-artifact.component";
import { EditCharacterComponent } from "./edit-character/edit-character.component";
import { EditWeaponComponent } from "./edit-weapon/edit-weapon.component";
import { CreateArtifactComponent } from "./create-artifact/create-artifact.component";
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { CreateWeaponComponent } from "./create-weapon/create-weapon.component";

const routes: Routes = [
  {path:'', component: IndexComponent},

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'artifacts', component: ArtifactsComponent },
  { path: 'artifacts/:id', component: SingleArtifactComponent },
  { path: 'editArtifact/:id', component: EditArtifactComponent },
  { path: 'createArtifact', component: CreateArtifactComponent },

  { path: 'weapons', component: WeaponsComponent },
  { path: 'weapons/:id', component: SingleWeaponComponent },
  { path: 'editWeapon/:id', component: EditWeaponComponent },
  { path: 'createWeapon', component: CreateWeaponComponent },

  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: SingleCharacterComponent },
  { path: 'editCharacters/:id', component: EditCharacterComponent },
  { path: 'createCharacter', component: CreateCharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
