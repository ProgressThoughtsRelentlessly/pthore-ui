import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalHomePageComponent } from './personal-home-page/personal-home-page.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { PersonalProfileViewComponent } from './personal-profile-view/personal-profile-view.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginRegisterWrapperComponent } from './login-register-wrapper/login-register-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { QuillModule } from 'ngx-quill'
import { PostCardsComponent } from './post-cards/post-cards.component';
import { DomainTilesComponent } from './domain-tiles/domain-tiles.component';
import { MiniPostComponent } from './mini-post/mini-post.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SpringInteractionService } from './spring-interaction.service';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { GeneralTilesComponent } from './general-tiles/general-tiles.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    PersonalHomePageComponent,
    ProfileViewComponent,
    PersonalProfileViewComponent,
    AdminPageComponent,
    LoginRegisterWrapperComponent,
    PostCardsComponent,
    DomainTilesComponent,
    MiniPostComponent,
    SearchBarComponent,
    ProfileUpdateComponent,
    GeneralTilesComponent,
    CommentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }]
    })
  ],
  providers: [ SpringInteractionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
