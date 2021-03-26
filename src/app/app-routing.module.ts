import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './components/card/card-view/card-view.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CredentialCardComponent } from './components/login/credential-card/credential-card.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LauncherComponent } from './components/pages/launcher/launcher.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { StackComponent } from './components/stack/stack.component';
import { CardEditComponent } from './components/card/card-edit/card-edit.component';
import { StackDetailsComponent } from './components/stack-details/stack-details.component';
import { StackDetailsCardComponent } from './components/stack-details-card/stack-details-card.component';
import { CardGridComponent } from './components/card/card-grid/card-grid.component';
import { StackViewPageComponent } from './components/pages/stack-view-page/stack-view-page.component';
import { CardAddComponent } from './components/card/card-add/card-add.component';

const routes: Routes = [
  {path:"card-add", component:CardAddComponent},
  {path:"stack-view-page", component:StackViewPageComponent},
  {path:"card-grid", component:CardGridComponent},
  {path:"stack-details-card", component:StackDetailsCardComponent},
  {path:"stack-details", component:StackDetailsComponent},
  {path:"card-view", component:CardViewComponent},
  {path:"home",component:HomePageComponent},
  {path:"login",component:LoginFormComponent},
  {path:"login-page",component:LoginPageComponent},
  {path:"stack",component:StackComponent},
  {path:"cred",component:CredentialCardComponent},
  {path:"card-edit",component:CardEditComponent},
  {path:"launcher",component:LauncherComponent},
  {path:"**",component:LauncherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
