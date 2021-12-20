import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ViewBlogsComponent } from './view-blogs/view-blogs.component'
import { PostBlogsComponent } from './post-blogs/post-blogs.component'
import { UpdateBlogsComponent } from './update-blogs/update-blogs.component'
import { DeleteBlogsComponent } from './delete-blogs/delete-blogs.component'

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'viewBlogs', component: ViewBlogsComponent },
  { path: 'postBlog', component: PostBlogsComponent },
  { path: 'updateBlogs/:blogId', component: UpdateBlogsComponent },
  { path: 'deleteBlogs/:blogId', component: DeleteBlogsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
