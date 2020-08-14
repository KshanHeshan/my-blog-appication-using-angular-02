import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { HeaderComponent } from './common/header/header.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogService } from './service/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    // routingComponents,
    BlogsComponent,
    BlogComponent,
    HeaderComponent,
    CreateBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    // Solution for scenario 01.
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
