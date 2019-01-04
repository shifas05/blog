
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
    { path:'login',component: LoginComponent}
  ];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[

  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
