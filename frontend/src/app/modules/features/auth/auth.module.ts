import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    SignInComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
