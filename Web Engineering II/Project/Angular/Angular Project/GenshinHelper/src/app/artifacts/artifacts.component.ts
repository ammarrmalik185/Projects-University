import { Component, OnInit } from '@angular/core';
import { GenshinHelperApiService } from "../genshin-helper-api.service";

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {


  artifactSets : any = [];
  constructor(private genshinAPI: GenshinHelperApiService) { }

  ngOnInit(): void {
    this.genshinAPI.getArtifactSets().subscribe({
      next: (artifactSets: any) => {this.artifactSets = artifactSets},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

  counter(i: number) {
    return new Array(i);
  }

}
