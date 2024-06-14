import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main-pages/login/login.component';
import { SignupComponent } from './main-pages/signup/signup.component';
// -----------------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{ SharedModule} from './shared/shared/shared.module';
import { MainShellComponent } from './main-pages/main-shell/main-shell.component';
import { SideNavbarComponent } from './main-pages/side-navbar/side-navbar.component';
import { SidebarComponent } from './main-pages/sidebar/sidebar.component';
import { HeaderComponent } from './main-pages/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditProfileComponent } from './main-pages/edit-profile/edit-profile.component';
import { OnlyNumberDirective } from './shared/only-number.directive';
import { CharNUmberOnlyDirective } from './shared/char-number-only.directive';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainShellComponent,
    SideNavbarComponent,
    SidebarComponent,
    HeaderComponent,
    EditProfileComponent,
    CharNUmberOnlyDirective,
    // OnlyNumberDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,SharedModule,ReactiveFormsModule,
    NgbModule,FormsModule,FlexLayoutModule,
    NgChartsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [NgChartsConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
