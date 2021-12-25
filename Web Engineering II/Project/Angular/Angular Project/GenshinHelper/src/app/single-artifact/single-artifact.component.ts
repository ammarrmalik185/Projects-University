import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenshinHelperApiService} from "../genshin-helper-api.service";

@Component({
  selector: 'app-single-artifact',
  templateUrl: './single-artifact.component.html',
  styleUrls: ['./single-artifact.component.css']
})
export class SingleArtifactComponent implements OnInit {

  constructor(private route:ActivatedRoute, private genshinAPI: GenshinHelperApiService, private router: Router) { }

  currentArtifactSet = {
    _id: "",
    name: "",
    maxRarity: 0,
    twoPieceBonus: "",
    fourPieceBonus: "",
    artifacts: [{
        id: "",
        name: "",
        type: "",
        rarity: 0,
        description: "",
        lore: "",
        location: "",
        image: ""
      }
    ]
  }

  ngOnInit(): void {
    this.genshinAPI.getSingleArtifactSet(this.route.snapshot.paramMap.get("id")).subscribe({
      next: (currentArtifactSet: any) => {this.currentArtifactSet = currentArtifactSet[0]},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  deleteArtifact(id: any):any {
    this.genshinAPI.deleteSingleArtifact(id).subscribe({
        error: (err: any) => {console.error(err)},
        complete: () => {
          console.log("completed");
          this.router.navigate(["/artifacts"])
        }
      }
    )
  }

}
