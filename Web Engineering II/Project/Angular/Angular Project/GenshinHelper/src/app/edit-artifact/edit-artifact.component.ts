import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-edit-artifact',
  templateUrl: './edit-artifact.component.html',
  styleUrls: ['./edit-artifact.component.css']
})
export class EditArtifactComponent implements OnInit {

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
    this.genshinAPI.getSingleArtifact(this.route.snapshot.paramMap.get("id")).subscribe({
      next: (currentArtifact: any) => {this.currentArtifact = currentArtifact},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  onSubmit(){
    this.genshinAPI.putSingleArtifact(this.currentArtifact).subscribe({
      error: (err: any) => {console.error(err)},
      complete: () => {
        console.log("completed");
        this.router.navigate(["/artifacts"])
      }
    })
  }

}
