import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './modules/main/pages/students/students.component';
import { DashboardComponent } from './modules/main/components/dashboard/dashboard.component';
import { StudentDetailComponent } from './modules/main/components/student-detail/student-detail.component';
import { UserComponent } from './modules/main/pages/user/user.component';
import { UserDetailComponent } from './modules/main/components/user-detail/user-detail.component';
import { PostsComponent } from './modules/main/pages/posts/posts.component';
import { PostDetailComponent } from './modules/main/components/post-detail/post-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path:'students', component: StudentsComponent },
	{ path: 'detail/:id', component: StudentDetailComponent },
	{ path: 'users', component: UserComponent },
	{ path: 'user-details/:id', component: UserDetailComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'post-details/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
