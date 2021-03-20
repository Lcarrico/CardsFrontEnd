import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
<<<<<<< Updated upstream
  {path:"**",component:LoginPageComponent}
=======
  {path:"login",component:LoginFormComponent},
  {path:"home",component:HomePageComponent},
  {path:"stack",component:StackComponent},
  {path:"cred",component:CredentialCardComponent},
  {path:"**",component:LauncherComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
