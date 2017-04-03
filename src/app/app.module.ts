import { BrowserModule }        from '@angular/platform-browser'
import { NgModule }             from '@angular/core'
import { FormsModule }          from '@angular/forms'
import { HttpModule }           from '@angular/http'
import { AppComponent }         from './app.component'
import { UserComponent }        from './user/user.component'
import { NotFoundComponent }    from './not-found/not-found.component'
import { AppRoutingModule }     from './app-routing.module';
import { JobPostModule}         from './job-post/job-post.module'
import { FindJobModule}         from './find-job/find-job.module'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService }  from './in-memory-data.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    JobPostModule,
    FindJobModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
