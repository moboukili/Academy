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
import { ArticlesComponent } from './components/etudiant/articles/articles.component';
import { ArticlesDetailsComponent } from './components/etudiant/articles-details/articles-details.component';
import { CertificatComponent } from './components/etudiant/certificat/certificat.component';
import { ContactComponent } from './components/etudiant/contact/contact.component';
import { FaqComponent } from './components/etudiant/faq/faq.component';
import { FormationOnlineComponent } from './components/etudiant/formation-online/formation-online.component';
import { ForumComponent } from './components/etudiant/forum/forum.component';
import { LessonsComponent } from './components/etudiant/lessons/lessons.component';
import { MesCoursComponent } from './components/etudiant/mes-cours/mes-cours.component';
import { MotDePasseComponent } from './components/etudiant/mot-de-passe/mot-de-passe.component';
import { ProfilComponent } from './components/etudiant/profil/profil.component';
import { QuiSuisJeComponent } from './components/etudiant/qui-suis-je/qui-suis-je.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { ExamComponent } from './components/admin/exam/exam.component';
import { AddExamComponent } from './components/admin/exam/add-exam/add-exam.component';
import { EditUserComponent } from './components/admin/user/edit-user/edit-user.component';
import { EditCourseComponent } from './components/admin/course/edit-course/edit-course.component';
import { EditArticleComponent } from './components/admin/article/edit-article/edit-article.component';
import { EditExamComponent } from './components/admin/exam/edit-exam/edit-exam.component';
import { BlogComponent } from './components/etudiant/blog/blog.component';
import { BlogDetailsComponent } from './components/etudiant/blog-details/blog-details.component';

const routes: Routes = [
   { path: 'Dashboard', component: DachboardComponent},
   { path: 'User', component: UserComponent},
   { path: 'Course', component: CourseComponent},
   { path: 'Article', component: ArticleComponent},
   { path: 'Menu', component: MenuComponent},
   { path: 'Add-User', component: AddUserComponent},
   { path: 'Edit-User', component: EditUserComponent},
   { path: 'Add-Course', component: AddCourseComponent},
   { path: 'Edit-Course', component: EditCourseComponent},
   { path: 'Add-Article', component: AddArticleComponent},
   { path: 'Edit-Article', component: EditArticleComponent},
   { path: 'Exam', component: ExamComponent},
   { path: 'Add-Exam', component: AddExamComponent},
   { path: 'Edit-Exam', component: EditExamComponent},
   { path: 'Admin-Profile', component: AdminProfileComponent},
   { path: 'Login-Admin', component: LoginComponent},
   { path: 'Acceuil', component: AcceuilComponent, data: { title: 'Home' }},
   {path: 'Articles', component: ArticlesComponent},
   {path: 'Articles-details', component: ArticlesDetailsComponent},
   {path: 'Certificats', component: CertificatComponent},
   {path: 'Contact', component: ContactComponent},
   {path: 'Faq', component: FaqComponent},
   {path: 'Formation-online', component: FormationOnlineComponent},
   {path: 'Forum', component: ForumComponent},
   {path: 'Lessons', component: LessonsComponent},
   {path: 'Mes-Cours', component: MesCoursComponent},
   {path: 'Mot-de-passe', component: MotDePasseComponent},
   {path: 'Profil', component: ProfilComponent},
   {path: 'Qui-suis-je', component: QuiSuisJeComponent},
   {path: 'Blog', component: BlogComponent},
   {path: 'Blog-Details', component: BlogDetailsComponent},
   {path: 'Register', component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
