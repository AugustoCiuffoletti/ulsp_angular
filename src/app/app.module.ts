import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { AccessoComponent } from './components/home-content/accesso/accesso.component';
import { ToolsComponent } from './components/home-content/tools/tools.component';
import { CreaComponent } from './components/home-content/tools/crea/crea.component';
import { CollezionaComponent } from './components/home-content/tools/colleziona/colleziona.component';
import { CaricaComponent } from './components/home-content/tools/carica/carica.component';
import { CloseToolComponent } from './components/home-content/tools/close-tool/close-tool.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    MainNavComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    ExternalApiComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    AccessoComponent,
    ToolsComponent,
    CreaComponent,
    CollezionaComponent,
    CaricaComponent,
    CloseToolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
