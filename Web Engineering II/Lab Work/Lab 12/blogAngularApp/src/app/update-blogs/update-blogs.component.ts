import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { RestApiDataService } from "../rest-api-data.service";

@Component({
  selector: 'app-update-blogs',
  templateUrl: './update-blogs.component.html',
  styleUrls: ['./update-blogs.component.css']
})
export class UpdateBlogsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: RestApiDataService, private router: Router) { }

  currentBlog = {_id: "", title: "", snippet: "", body: ""};

  blogs: any = [];

  ngOnInit(): void {
    this.getBlogsFromServer()
  }

  getBlogsFromServer() {
    this.service.doGet().subscribe({
      next: (blog: any) => {
        this.blogs = blog;
        console.log(blog)
        this.currentBlog = this.findTheBlog();
      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        console.log("completed")
      }
    })
  }

  findTheBlog() : any{
    const routeParams = this.route.snapshot.paramMap.get("blogId");
    return this.blogs.find((data :any) => data._id === routeParams)
  }

  updateBlog() {
    this.service.doUpdate(this.currentBlog).subscribe({
      next: () => {},
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        this.router.navigate(["viewBlogs"])
      }
    })
  }
}
