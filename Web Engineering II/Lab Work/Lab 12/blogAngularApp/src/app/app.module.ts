import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { PostBlogsComponent } from './post-blogs/post-blogs.component';
import { UpdateBlogsComponent } from './update-blogs/update-blogs.component';
import { DeleteBlogsComponent } from './delete-blogs/delete-blogs.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ViewBlogsComponent,
    PostBlogsComponent,
    UpdateBlogsComponent,
    DeleteBlogsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
