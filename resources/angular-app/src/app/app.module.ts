import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './modules/main/pages/students/students.component';
import { StudentDetailComponent } from './modules/main/components/student-detail/student-detail.component';
import { MessageComponent } from './modules/main/components/message/message.component';
import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { UserComponent } from './modules/main/pages/user/user.component';
import { UserDetailComponent } from './modules/main/components/user-detail/user-detail.component';
import { PostsComponent } from './modules/main/pages/posts/posts.component';
import { PostDetailComponent } from './modules/main/components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessageComponent,
    DashboardComponent,
    UserComponent,
    UserDetailComponent,
    PostsComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
