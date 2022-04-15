import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DachboardComponent } from './components/dachboard/dachboard.component';
import { UserComponent } from './components/user/user.component';
import { CourseComponent } from './components/course/course.component';
import { ArticleComponent } from './components/article/article.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { EditExamComponent } from './components/edit-exam/edit-exam.component';
import { ExamComponent } from './components/exam/exam.component';
import { AcceuilComponent } from './components/etudiant/acceuil/acceuil.component';
import { QuiSuisJeComponent } from './components/etudiant/qui-suis-je/qui-suis-je.component';
import { ContactComponent } from './components/etudiant/contact/contact.component';
import { ForumComponent } from './components/etudiant/forum/forum.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { ArticlesComponent } from './components/etudiant/articles/articles.component';
import { ArticlesDetailsComponent } from './components/etudiant/articles-details/articles-details.component';
import { HeaderComponent } from './components/etudiant/header/header.component';
import { FooterComponent } from './components/etudiant/footer/footer.component';
import { MesCoursComponent } from './components/etudiant/mes-cours/mes-cours.component';
import { ProfilComponent } from './components/etudiant/profil/profil.component';
import { CertificatComponent } from './components/etudiant/certificat/certificat.component';
import { LessonsComponent } from './components/etudiant/lessons/lessons.component';
import { MotDePasseComponent } from './components/etudiant/mot-de-passe/mot-de-passe.component';
import { FormationOnlineComponent } from './components/etudiant/formation-online/formation-online.component';

@NgModule({
  declarations: [
    AppComponent,
    DachboardComponent,
    UserComponent,
    CourseComponent,
    ArticleComponent,
    AddUserComponent,
    AddArticleComponent,
    AddCourseComponent,
    AdminProfileComponent,
    LoginComponent,
    MenuComponent,
    EditArticleComponent,
    EditUserComponent,
    EditCourseComponent,
    AddExamComponent,
    EditExamComponent,
    ExamComponent,
    AcceuilComponent,
    QuiSuisJeComponent,
    ContactComponent,
    ForumComponent,
    RegisterComponent,
    ArticlesComponent,
    ArticlesDetailsComponent,
    HeaderComponent,
    FooterComponent,
    MesCoursComponent,
    ProfilComponent,
    CertificatComponent,
    LessonsComponent,
    MotDePasseComponent,
    FormationOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
