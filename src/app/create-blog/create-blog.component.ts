import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private BlogServices:BlogService, private router:Router) { }

  newBlogForm = new FormGroup ({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    date: new FormControl(),
    description: new FormControl('', Validators.required),
  })

  blog_post: Blog;
  edit_form: boolean;

  ngOnInit(): void {

    const blog_post_id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.blog_post = this.BlogServices.blogs.find(b=>b.id = blog_post_id);

    if (this.blog_post) {
      console.log(this.blog_post);
      this.edit_form = true;
      this.newBlogForm.controls.title.setValue(this.blog_post.title);
      this.newBlogForm.controls.description.setValue(this.blog_post.description);
    }

  }

  onBlogDetailsSubmit() {
    if (this.newBlogForm.valid) {
      if (!this.edit_form) {
        this.newBlogForm.controls.id.setValue(this.retrieveBlogID() + 1);
        this.newBlogForm.controls.date.setValue(new Date());
        this.BlogServices.addBlgPosts(this.newBlogForm.value);
        this.router.navigate(['']);
      } else {
        let blog:Blog = {
          id: this.blog_post.id,
          date: new Date(),
          title: this.newBlogForm.value.title,
          description:this.newBlogForm.value.description,
          starButtons:this.blog_post.starButtons
        };
        this.BlogServices.editA_blog(blog);
        this.router.navigate(['']);
      }
    } else {
      console.log(this.newBlogForm.valid);
      this.router.navigate([''])
    }
  }

  retrieveBlogID() {
    return Math.max.apply(Math, this.BlogServices.blogs.map(function (b) {
      return b.id
    }
    ));
  }

}
