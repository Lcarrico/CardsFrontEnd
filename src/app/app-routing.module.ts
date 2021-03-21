import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './components/card-view/card-view/card-view.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {path:"card-view", component:CardViewComponent},
  {path:"**",component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
