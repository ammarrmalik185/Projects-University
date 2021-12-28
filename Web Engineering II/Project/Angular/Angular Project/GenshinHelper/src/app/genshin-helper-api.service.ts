import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenshinHelperApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  apiUrl = "http://localhost:3001/admin"

  constructor(private http: HttpClient) { }

  getAdmin(username: any): any{
    let usernameId : String = username;
    return this.http.get(this.apiUrl + "/admin/" + usernameId)
  }
  postAdmin(admin: any): any{
    return this.http.post(this.apiUrl + "/admin", admin, this.httpOptions)
  }

  // Artifacts
  getArtifacts() : any{
    return this.http.get(this.apiUrl + "/artifacts")
  }
  getSingleArtifact(id: any) : any{
    let artifactId : String = id;
    return this.http.get(this.apiUrl + "/artifact/" + artifactId)
  }
  postSingleArtifact(artifact: any) : any{
    return this.http.post(this.apiUrl + "/artifact", artifact, this.httpOptions)
  }
  putSingleArtifact(artifact: any) : any{
    let artifactId : String = artifact.id;
    return this.http.put(this.apiUrl + "/artifact/" + artifactId, artifact, this.httpOptions)
  }
  deleteSingleArtifact(id: any) : any{
    let artifactId : String = id;
    return this.http.delete(this.apiUrl + "/artifact/" + artifactId)
  }

  // Artifact Sets
  getArtifactSets() : any{
    return this.http.get(this.apiUrl + "/artifactSet")
  }
  getSingleArtifactSet(id: any) : any{
    let setId : String = id;
    return this.http.get(this.apiUrl + "/artifactSet/" + setId)
  }

  // Weapons
  getWeapons() : any{
    return this.http.get(this.apiUrl + "/weapons")
  }
  getSingleWeapon(id: any) : any{
    let weaponId : String = id;
    return this.http.get(this.apiUrl + "/weapon/" + weaponId)
  }
  postSingleWeapon(weapon: any) : any{
    return this.http.post(this.apiUrl + "/weapon", weapon, this.httpOptions)
  }
  putSingleWeapon(weapon: any) : any{
    let weaponId : String = weapon.id;
    return this.http.put(this.apiUrl + "/weapon/" + weaponId, weapon, this.httpOptions)
  }
  deleteSingleWeapon(id: any) : any{
    let weaponId : String = id;
    return this.http.delete(this.apiUrl + "/weapon/" + weaponId)
  }

  // Characters
  getCharacters() : any{
    return this.http.get(this.apiUrl + "/characters")
  }
  getSingleCharacter(id: any) : any{
    let characterId : String = id;
    return this.http.get(this.apiUrl + "/character/" + characterId)
  }
  postSingleCharacter(character: any) : any{
    return this.http.post(this.apiUrl + "/character", character, this.httpOptions)
  }
  putSingleCharacter(character: any) : any{
    let characterId : String = character.id;
    return this.http.put(this.apiUrl + "/character/" + characterId, character, this.httpOptions)
  }
  deleteSingleCharacter(id: any) : any{
    let characterId : String = id;
    return this.http.delete(this.apiUrl + "/character/" + characterId)
  }

}
