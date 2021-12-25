import { Component, OnInit } from '@angular/core';
import { GenshinHelperApiService } from "../genshin-helper-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private genshinAPI: GenshinHelperApiService, private router: Router) { }
  characters: any = [];

  ngOnInit(): void {
    this.genshinAPI.getCharacters().subscribe({
      next: (characters: any) => {this.characters = characters},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }


  counter(i: number) {
    return new Array(i);
  }

  deleteCharacter(id: any){
    this.genshinAPI.deleteSingleCharacter(id).subscribe({
        error: (err: any) => {console.error(err)},
        complete: () => {
          console.log("completed");
          window.location.reload()
        }
      }
    )
  }

}
