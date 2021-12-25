import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.css']
})
export class CreateWeaponComponent implements OnInit {

  constructor(private route:ActivatedRoute, private genshinAPI: GenshinHelperApiService, private router: Router) { }

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

  }

  counter(i: number) {
    return new Array(i);
  }

  onSubmit(){
    console.log(this.currentWeapon)
    this.genshinAPI.postSingleWeapon(this.currentWeapon).subscribe({
      error: (err: any) => {console.error(err)},
      complete: () => {
        console.log("completed");
        this.router.navigate(["/weapons"])
      }
    })
  }

}
