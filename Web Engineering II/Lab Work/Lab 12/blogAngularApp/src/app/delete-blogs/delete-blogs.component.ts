import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestApiDataService} from "../rest-api-data.service";

@Component({
  selector: 'app-delete-blogs',
  templateUrl: './delete-blogs.component.html',
  styleUrls: ['./delete-blogs.component.css']
})
export class DeleteBlogsComponent implements OnInit {

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

  deleteBlog() {
    this.service.doDelete(this.currentBlog._id).subscribe({
      next: () => {
        this.router.navigate(["viewBlogs"])
      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        console.log("completed")
      }
    })
  }
}
