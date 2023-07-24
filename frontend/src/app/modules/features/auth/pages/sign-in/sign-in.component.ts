import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formControl:any
  singInForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    login: new FormControl('',[Validators.required]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(6),
      Validators.maxLength(25),
      this.matchValidator('confirmPassword', true)],),
    checkPassword: new FormControl('',[
      Validators.required,
      this.matchValidator('password')]),



  })
 onSubmit(){
    if (this.singInForm.valid){
      console.log(this.singInForm.value)
    }
    else
      console.log(this.singInForm.errors)


 }

  ngOnInit(): void {
  }

   matchValidator(
    matchTo: string,
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl):
      ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo]as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
      !!control.parent.value &&
      control.value ===
      (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

}
