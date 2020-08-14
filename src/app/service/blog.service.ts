import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private httpClient: HttpClient) {
      this.retrieveTheBlogs();
      console.log("called");      
  }

  public blogs: Blog[] = [];
  // public blogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'First Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my First blog display using angular js.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Second Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my second blog display using angular js.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Third Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my third blog display using angular js.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Fourth Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my Fourth blog display using angular js.',
  //   },
  //   {
  //     id: 5,
  //     title: 'Fifth Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my Fifth blog display using angular js.',
  //   },
  //   {
  //     id: 6,
  //     title: 'Sixth Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my Sixth blog display using angular js.',
  //   },
  //   {
  //     id: 7,
  //     title: 'Seventh Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my Seventh blog display using angular js.',
  //   },
  //   {
  //     id: 8,
  //     title: 'Eighth Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my Eighth blog display using angular js.',
  //   },
  //   {
  //     id: 9,
  //     title: 'Ninth Blog',
  //     date: new Date(),
  //     starButtons:[true,true,true,true,true],
  //     description:'This is my Ninth blog display using angular js.',
  //   },
  // ];
 
 fetchAllblogs(){
   return this.blogs
 }
 removeBlog(id: number){
    this.blogs = this.blogs.filter(item => item.id !== id);
    return this.blogs
 }

 addBlgPosts(post: Blog) {
   this.blogs.push(post);
   console.log(this.blogs);
   
 }

 retrieveA_blog(post_id: number) {
   return this.blogs.find(b=>b.id=post_id)
 }

 retrieveTheBlogs() {
   this.httpClient.get('https://run.mocky.io/v3/40d1dd50-1cc9-42b0-afdd-0d75c7186fe3').pipe(ErrorCapture(this.errorHandling)).subscribe((value: Blog[]) => {
      this.blogs=value;
   });
 }

 editA_blog(post: Blog) {
   let blog_index = this.blogs.findIndex(b=>b.id=post.id)
   this.blogs[blog_index].id = post.id;
   this.blogs[blog_index].title = post.title;
   this.blogs[blog_index].description = post.description
   this.blogs[blog_index].date = post.date;
   console.log(this.blogs);
   
 }

 private errorHandling(error: Response | any) {
   return null;
 }

}

