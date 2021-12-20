import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-blogs',
  templateUrl: './delete-blogs.component.html',
  styleUrls: ['./delete-blogs.component.css']
})
export class DeleteBlogsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  currentBlog: any

  blogs = [
    {blog_id:1, title: "Example title", snippet: "test", body:"this is a blog body"},
    {blog_id:2, title: "Example title2", snippet: "test2", body:"this is a blog body2"},
    {blog_id:3, title: "Example title3", snippet: "test3", body:"this is a blog body3"},
    {blog_id:4, title: "Example title4", snippet: "test4", body:"this is a blog body4"},
  ]

  ngOnInit(): void {
    this.currentBlog = this.findTheBlog();
  }

  findTheBlog() : any{
    const routeParams = Number(this.route.snapshot.paramMap.get("blogId"));
    return this.blogs.find(data => data.blog_id === routeParams)
  }

  deleteBlog() {
    // todo delete blog code
  }
}
