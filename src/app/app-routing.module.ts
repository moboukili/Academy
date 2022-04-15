import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/admin/article/add-article/add-article.component';
import { AddCourseComponent } from './components/admin/course/add-course/add-course.component';
import { AddUserComponent } from './components/admin/user/add-user/add-user.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { ArticleComponent } from './components/admin/article/article.component';
import { CourseComponent } from './components/admin/course/course.component';
import { DachboardComponent } from './components/admin/dachboard/dachboard.component';
import { LoginComponent } from './components/admin/login/login.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { UserComponent } from './components/admin/user/user.component';
import { AcceuilComponent } from './components/etudiant/acceuil/acceuil.component';

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
   { path: 'home', component: AcceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
