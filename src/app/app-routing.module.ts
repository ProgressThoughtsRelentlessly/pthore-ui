import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginRegisterWrapperComponent } from './login-register-wrapper/login-register-wrapper.component';
import { LoginComponent } from './login/login.component';
import { PersonalHomePageComponent } from './personal-home-page/personal-home-page.component';
import { PersonalProfileViewComponent } from './personal-profile-view/personal-profile-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "app/api/admin/stats",
    component: AdminPageComponent
  },
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "login",
    component: LoginRegisterWrapperComponent
  },
  {
    path: "register",
    component: LoginRegisterWrapperComponent
  },
  {
    path: "profile",
    component: PersonalProfileViewComponent
  },
  {
    path: "profile/update/:id",
    component: ProfileUpdateComponent
  },
  {
    path: "profile/:id",
    component: ProfileViewComponent
  },
  {
    path: "post/:id",
    component: PostViewComponent
  },
  {
    path: "explore",
    component: PersonalHomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
