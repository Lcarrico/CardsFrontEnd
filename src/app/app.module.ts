import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCommonModule, MatLineModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StackComponent } from './components/stack/stack.component';
import { StackTableComponent } from './components/stack-table/stack-table.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CardViewComponent } from './components/card/card-view/card-view.component';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './components/login/registration-form/registration-form.component';
import { LauncherComponent } from './components/pages/launcher/launcher.component';
import { CredentialCardComponent } from './components/login/credential-card/credential-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { JwtModule } from "@auth0/angular-jwt";
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CardEditComponent } from './components/card/card-edit/card-edit.component';
import { StackDetailsComponent } from './components/stack-details/stack-details.component';
import { StackDetailsCardComponent } from './components/stack-details-card/stack-details-card.component';
import { CardGridComponent } from './components/card/card-grid/card-grid.component';
import { StackViewPageComponent } from './components/pages/stack-view-page/stack-view-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    StackComponent,
    StackTableComponent,
    CardViewComponent,
    RegistrationFormComponent,
    LauncherComponent,
    CredentialCardComponent,
    NavbarComponent,
    HomePageComponent,
    CardEditComponent,
    StackDetailsComponent,
    StackDetailsCardComponent,
    CardGridComponent,
    StackViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatLineModule,
    MatCommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {return localStorage.getItem('access_token');}, allowedDomains: ['localhost:3000'], disallowedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
