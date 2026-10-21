import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module'; 
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';
//import { AuthService } from '../services/auth.service';

@NgModule({ declarations: [RegisterComponent, LoginComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AuthRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AuthModule { }
