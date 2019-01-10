import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './modules/main/pages/students/students.component';
import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { StudentDetailComponent } from './modules/main/components/student-detail/student-detail.component';
import { UserComponent } from './modules/main/pages/user/user.component';
import { UserDetailComponent } from './modules/main/components/user-detail/user-detail.component';
import { PostsComponent } from './modules/main/pages/posts/posts.component';
import { PostDetailComponent } from './modules/main/components/post-detail/post-detail.component';
import { LoginComponent } from './modules/main/components/login/login.component';

import { AuthGuard } from './modules/main/classes/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path:'students', component: StudentsComponent, canActivate: [AuthGuard] },
	{ path: 'detail/:id', component: StudentDetailComponent, canActivate: [AuthGuard] },
	{ path: 'users', component: UserComponent, canActivate: [AuthGuard] },
	{ path: 'user-details/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
	{ path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
	{ path: 'post-details/:id', component: PostDetailComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
