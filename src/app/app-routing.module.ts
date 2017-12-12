import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './pages/public/login/login.component';
import {RegisterComponent} from './pages/public/register/register.component';
import {AuthGuard} from './pages/public/_guards/auth.guard';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register',  component: RegisterComponent},
  /*{ path: '', redirectTo: 'pages', pathMatch: 'full' },*/
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
