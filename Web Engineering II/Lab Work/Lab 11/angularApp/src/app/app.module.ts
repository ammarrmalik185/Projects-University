import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { PostBlogsComponent } from './post-blogs/post-blogs.component';
import { UpdateBlogsComponent } from './update-blogs/update-blogs.component';
import { DeleteBlogsComponent } from './delete-blogs/delete-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBlogsComponent,
    PostBlogsComponent,
    UpdateBlogsComponent,
    DeleteBlogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
