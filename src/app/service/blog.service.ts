import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogs: Blog[] = [
    {
      id: 1,
      title: 'First Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my First blog display using angular js.',
    },
    {
      id: 2,
      title: 'Second Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my second blog display using angular js.',
    },
    {
      id: 3,
      title: 'Third Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my third blog display using angular js.',
    },
    {
      id: 4,
      title: 'Fourth Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my Fourth blog display using angular js.',
    },
    {
      id: 5,
      title: 'Fifth Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my Fifth blog display using angular js.',
    },
    {
      id: 6,
      title: 'Sixth Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my Sixth blog display using angular js.',
    },
    {
      id: 7,
      title: 'Seventh Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my Seventh blog display using angular js.',
    },
    {
      id: 8,
      title: 'Eighth Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my Eighth blog display using angular js.',
    },
    {
      id: 9,
      title: 'Ninth Blog',
      date: new Date(),
      starButtons:[true,true,true,true,true],
      description:'This is my Ninth blog display using angular js.',
    },
  ];
 
 fetchAllblogs(){
   return this.blogs
 }
 removeBlog(id: number){
    this.blogs = this.blogs.filter(item => item.id !== id);
    return this.blogs
 }
  constructor() {}
}

