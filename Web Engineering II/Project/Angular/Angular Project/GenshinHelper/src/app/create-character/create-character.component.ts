import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {


  constructor(private route:ActivatedRoute, private genshinAPI: GenshinHelperApiService, private router: Router) { }

  currentCharacter = {
    "id":"",
    "name":"",
    "tier":"",
    "rarity":0,
    "weapon":"",
    "element":"",
    "description":"",
    "region":"",
    "faction":"",
    "image":"",
    "icon":"",
    "squareCard":"",
    "title":"",
    "birthday":"",
    "constellation":"",
    "englishVA":"",
    "talents":[
      {"id":"", "name":"", "description":"", "image":"", "type":""},
      {"id":"", "name":"", "description":"", "image":"", "type":""},
      {"id":"", "name":"", "description":"", "image":"", "type":""},
      {"id":"", "name":"", "description":"", "image":"", "type":""},
      {"id":"", "name":"", "description":"", "image":"", "type":""},
      {"id":"", "name":"", "description":"", "image":"", "type":""}
    ],
    "constellations":[
      {"id":"", "name":"", "order":0, "description":"", "image":""},
      {"id":"", "name":"", "order":0, "description":"", "image":""},
      {"id":"", "name":"", "order":0, "description":"", "image":""},
      {"id":"", "name":"", "order":0, "description":"", "image":""},
      {"id":"", "name":"", "order":0, "description":"", "image":""},
      {"id":"", "name":"", "order":0, "description":"", "image":""}
    ]
  }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  onSubmit(){
    this.genshinAPI.postSingleCharacter(this.currentCharacter).subscribe({
      error: (err: any) => {console.error(err)},
      complete: () => {
        console.log("completed");
        this.router.navigate(["/characters"])
      }
    })
  }

}
