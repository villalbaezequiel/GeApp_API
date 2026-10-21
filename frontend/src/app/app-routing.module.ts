import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  //{path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'tyc', component: TermsAndConditionsComponent},
  {path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
