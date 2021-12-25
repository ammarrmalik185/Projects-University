import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-create-artifact',
  templateUrl: './create-artifact.component.html',
  styleUrls: ['./create-artifact.component.css']
})
export class CreateArtifactComponent implements OnInit {

  constructor(private route:ActivatedRoute, private genshinAPI: GenshinHelperApiService, private router: Router) { }

  currentArtifact = {
    "id":0,
    "name":"",
    "type":"",
    "rarity":0,
    "description":"",
    "lore":"",
    "location":"",
    "image":"",
    "artifactSet":{
      "id":"",
      "name":"",
      "maxRarity":0,
      "twoPieceBonus":"",
      "fourPieceBonus":""
    }
  }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  onSubmit(){
    this.genshinAPI.postSingleArtifact(this.currentArtifact).subscribe({
      error: (err: any) => {console.error(err)},
      complete: () => {
        console.log("completed");
        this.router.navigate(["/artifacts"])
      }
    })
  }

}
