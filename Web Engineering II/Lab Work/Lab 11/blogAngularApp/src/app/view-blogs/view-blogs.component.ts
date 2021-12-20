import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  constructor() {



  }

  blogs = [
    {blog_id:1, title: "Example title", snippet: "test", body:"this is a blog body"},
    {blog_id:2, title: "Example title2", snippet: "test2", body:"this is a blog body2"},
    {blog_id:3, title: "Example title3", snippet: "test3", body:"this is a blog body3"},
    {blog_id:4, title: "Example title4", snippet: "test4", body:"this is a blog body4"},
  ]

  ngOnInit(): void {
  }

}
