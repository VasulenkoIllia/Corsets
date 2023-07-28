import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm =new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(6),
      Validators.maxLength(25),])
  })

  ngOnInit(): void {

  }

  onSubmit(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }

  getControllError(controllName:string):boolean{
    const control:AbstractControl<any, any> | null = this.loginForm.get(controllName)
    if (!control){
      return false
    }
    else {
      return control.invalid && control.touched
    }
  }

}
