import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StackComponent } from './components/stack/stack.component';
import { StackTableComponent } from './components/stack-table/stack-table.component';
<<<<<<< Updated upstream
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
=======
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LauncherComponent } from './components/launcher/launcher.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { CredentialCardComponent } from './components/credential-card/credential-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';import { MatCommonModule, MatLineModule } from '@angular/material/core';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    StackComponent,
    StackTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
<<<<<<< Updated upstream
    FormsModule
=======
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
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {return localStorage.getItem('access_token');}, allowedDomains: ['localhost:3000'], disallowedRoutes: ['http://localhost:3000/auth/login']
      }
    })
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
