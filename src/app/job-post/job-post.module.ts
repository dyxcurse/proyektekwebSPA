import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { JobPostComponent }     from './job-post.component';
import { JobPostRoutingModule}  from './job-post-routing.module'
@NgModule({
  imports: [CommonModule,JobPostRoutingModule],
  declarations: [JobPostComponent]
})
export class JobPostModule { }
