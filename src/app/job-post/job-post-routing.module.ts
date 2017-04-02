import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { JobPostComponent } from './job-post.component'

const jobsRoutes:Routes=[
    {
    path: 'jobs',
    component: JobPostComponent,
    children: [
      /*{
        path: '',
        component: JobListComponent,
        children: [
          {
            path: ':id',
            component: JobDetailComponent
          },
          {
            path: '',
            component: CrisisHomeComponent
          }
        ]
      }*/
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forChild(jobsRoutes)],
  exports: [ RouterModule ]
})
export class JobPostRoutingModule { }