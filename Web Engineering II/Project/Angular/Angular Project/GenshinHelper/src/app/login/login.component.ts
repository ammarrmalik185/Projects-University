import { Component, OnInit } from '@angular/core';
import {GenshinHelperApiService} from "../genshin-helper-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private genshinAPI: GenshinHelperApiService, private router: Router) { }

  data = {
    username: "",
    password: ""
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.genshinAPI.getAdmin(this.data.username).subscribe({
      next: (admin: any) => {
        if (admin){
          if(admin.password == this.data.password)
            this.router.navigate(["/"])
        }
      },
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

}
