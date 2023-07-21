import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
