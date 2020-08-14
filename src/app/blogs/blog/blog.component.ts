import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;

  @Output() valuechange:EventEmitter<any>=new EventEmitter<any>()

  rateCount:number;

  constructor(private blogService:BlogService) {}
  
  ngOnInit(): void {}

  deletePost(blog){
    this.valuechange.emit(blog)
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
}

