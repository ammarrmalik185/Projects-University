import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RestApiDataService } from "../rest-api-data.service";

@Component({
  selector: 'app-post-blogs',
  templateUrl: './post-blogs.component.html',
  styleUrls: ['./post-blogs.component.css']
})
export class PostBlogsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: RestApiDataService, private router: Router) { }

  currentBlog = {title: "", snippet: "", body: ""};

  blogs: any = [];

  ngOnInit(): void {

  }

  findTheBlog() : any{
    const routeParams = this.route.snapshot.paramMap.get("blogId");
    return this.blogs.find((data :any) => data._id === routeParams)
  }

  postBlog() {
    this.service.doPost(this.currentBlog).subscribe({
      next: () => {

      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        this.router.navigate(["viewBlogs"])
      }
    })
  }

}
