import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  blogPost: Blog;

  constructor( private activatedRouters: ActivatedRoute, private BlogService: BlogService) {}

  ngOnInit(): void {

    const blog_post_id = +this.activatedRouters.snapshot.paramMap.get('id');
    this.blogPost = this.BlogService.retrieveA_blog(blog_post_id);
    console.log(this.blogPost)

  }

}
