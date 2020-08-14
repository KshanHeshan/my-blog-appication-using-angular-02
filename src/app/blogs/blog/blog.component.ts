import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Blog } from 'src/app/model/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;

  @Output() valuechange:EventEmitter<any>=new EventEmitter<any>()

  rateCount:number;

  constructor(public blogService:BlogService, private router: Router) {}
  
  ngOnInit(): void {}

  deletePost(blog: Blog){
    this.blogService.removeBlog(blog.id)
  }

  StarRating(rate:any,starData:any){  
    this.rateCount=starData+1;  
    for(var x=0;x<=4;x++){  
      if(x<=starData){  
        rate.starButtons[x]=false;  
      }  
      else{  
        rate.starButtons[x]=true;  
      }  
    }  
  }
  
  updatePost(blog: Blog) {
      this.router.navigate(['edit', blog.id]);
  }
  
}

