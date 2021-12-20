import { Component, OnInit } from '@angular/core';
import { GenshinHelperApiService } from "../genshin-helper-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private genshinAPI: GenshinHelperApiService) { }
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

}
