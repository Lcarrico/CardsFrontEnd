import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialCardComponent } from './components/credential-card/credential-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LauncherComponent } from './components/launcher/launcher.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { StackComponent } from './components/stack/stack.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"login",component:LoginFormComponent},
  {path:"stack",component:StackComponent},
  {path:"cred",component:CredentialCardComponent},
  {path:"**",component:LauncherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
