import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

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
      {
        "id":"",
        "name":"",
        "description":"",
        "image":"",
        "type":""
      }
    ],
    "constellations":[
      {
        "id":"",
        "name":"",
        "order":0,
        "description":"",
        "image":""
      }
    ]
  }

  ngOnInit(): void {
    this.genshinAPI.getSingleCharacter(this.route.snapshot.paramMap.get("id")).subscribe({
      next: (currentCharacter: any) => {this.currentCharacter = currentCharacter},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

  counter(i: number) {
    return new Array(i);
  }
}
