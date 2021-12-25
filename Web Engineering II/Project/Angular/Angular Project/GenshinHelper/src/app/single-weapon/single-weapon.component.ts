import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-single-weapon',
  templateUrl: './single-weapon.component.html',
  styleUrls: ['./single-weapon.component.css']
})
export class SingleWeaponComponent implements OnInit {

  constructor(private route:ActivatedRoute, private genshinAPI: GenshinHelperApiService) { }

  currentWeapon = {
    "id":"",
    "name":"",
    "type":"",
    "rarity":0,
    "baseAtk":0,
    "subStatType":"",
    "subStat":0,
    "abilityName":"",
    "abilityDescription":"",
    "description":"",
    "lore":"",
    "image":"",
    "location":""
  }

  ngOnInit(): void {
    this.genshinAPI.getSingleWeapon(this.route.snapshot.paramMap.get("id")).subscribe({
      next: (currentArtifactSet: any) => {this.currentWeapon = currentArtifactSet},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

  counter(i: number) {
    return new Array(i);
  }

}
