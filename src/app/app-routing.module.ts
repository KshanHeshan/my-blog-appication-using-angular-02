import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';


const routes: Routes = [
  { path:'create', component: CreateBlogComponent },
  { path:'edit/:id', component: BlogComponent },
  { path:'', component: BlogsComponent },
  { path:'view/:id', component: ViewBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [CreateBlogComponent]
