import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { ArticleComponent } from './admin/article/article.component';
import { CourseComponent } from './admin/course/course.component';
import { DachboardComponent } from './admin/dachboard/dachboard.component';
import { LoginComponent } from './admin/login/login.component';
import { MenuComponent } from './admin/menu/menu.component';
import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
   { path: 'Dachboard', component: DachboardComponent},
   { path: 'User', component: UserComponent},
   { path: 'Course', component: CourseComponent},
   { path: 'Article', component: ArticleComponent},
   { path: 'Menu', component: MenuComponent},
   { path: 'Add_User', component: AddUserComponent},
   { path: 'Add_Course', component: AddCourseComponent},
   { path: 'Add_Article', component: AddArticleComponent},
   { path: 'Admin_Profile', component: AdminProfileComponent},
   { path: 'Login_Admin', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
