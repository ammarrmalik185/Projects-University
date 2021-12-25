import { Component, OnInit } from '@angular/core';
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  constructor(private genshinAPI: GenshinHelperApiService) { }

  weapons: any = [];
  ngOnInit(): void {
    this.genshinAPI.getWeapons().subscribe({
      next: (weapons: any) => {this.weapons = weapons},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  deleteWeapon(id: any){
    this.genshinAPI.deleteSingleWeapon(id).subscribe({
        error: (err: any) => {console.error(err)},
        complete: () => {
          console.log("completed");
          window.location.reload()
        }
      }
    )
  }

}
