import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs = null;
  
  constructor(private blogsService: BlogService) {}

  ngOnInit(): void {
    this.showAllblogs()
  }

  showAllblogs(){
    this.blogs = this.blogsService.fetchAllblogs();
  }

  blogDeleteEvent($deleteEvent){
    let blog=$deleteEvent
    if(confirm('Are you sure that you want to delete this blog?')){
      this.blogs=this.blogsService.removeBlog(blog.id)
    }
  }
}
