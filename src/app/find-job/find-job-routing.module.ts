import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FindJobComponent } from './find-job.component'

const findRoutes:Routes=[
    {
    path: 'find',
    component: FindJobComponent,
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
  imports: [ RouterModule.forChild(findRoutes)],
  exports: [ RouterModule ]
})
export class FindJobRoutingModule { }