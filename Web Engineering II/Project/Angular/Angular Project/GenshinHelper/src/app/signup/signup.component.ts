import { Component, OnInit } from '@angular/core';
import {GenshinHelperApiService} from "../genshin-helper-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private genshinAPI: GenshinHelperApiService, private router: Router) { }

  data = {
    username : "",
    password : "",
    email: "",
    name: "",
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.genshinAPI.postAdmin(this.data).subscribe({
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed"); this.router.navigate(["/"])}
    })
  }
}
