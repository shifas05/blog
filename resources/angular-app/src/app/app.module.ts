import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from "ngx-toastr";

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
import { API } from "./settings";
import { LoginComponent } from './modules/main/components/login/login.component';

import { AuthGuard } from './modules/main/classes/auth.guard';
import { ServerComponent } from './modules/main/components/server/server.component';
import { ServersComponent } from './modules/main/components/servers/servers.component';



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
    LoginComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: [API.url],
      }
    })
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
