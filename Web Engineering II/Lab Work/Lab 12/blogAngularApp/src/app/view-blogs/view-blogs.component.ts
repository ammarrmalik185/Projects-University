import { Component, OnInit } from '@angular/core';
import { RestApiDataService } from "../rest-api-data.service";

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  constructor(private service: RestApiDataService) { }

  blogs: any = []

  ngOnInit(): void {
    this.getBlogsFromServer()
  }

  getBlogsFromServer(){
    this.service.doGet().subscribe({
      next: (blog: any) => {this.blogs = blog},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log("completed")}
    })
  }

}
