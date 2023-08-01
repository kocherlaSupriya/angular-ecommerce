import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { Auth2Guard } from './auth2.guard';


const routes: Routes = [
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'login',component:LoginComponent, canActivate:[Auth2Guard]
  },
  {
    path:'registration',component:RegistrationComponent
  },
  { 
    path: 'products', loadChildren: () =>
    import('./products/products.module').then(m=>m.ProductsModule) ,
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  { 
    path: '', redirectTo: '/welcome', pathMatch: 'full' 
  },
  {
    path:'changepwd',component:ChangepwdComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
