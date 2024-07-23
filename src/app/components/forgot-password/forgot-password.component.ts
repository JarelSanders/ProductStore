import { Component, inject } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../../../styles.css']
})
export class ForgotPasswordComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  // hiding text box
  // visible:boolean  = false;
  // visible2:boolean = false;
  // text:string = 'Thanks, if an account exist, you will recieve an email shortly.';
  // text2:string = 'Please enter an email';

  
  validate = () => {
    let emailReset = (<HTMLInputElement>document.getElementById('email-reset'));
    let emailError = (<HTMLElement>     document.getElementById('email-error'));
    //checks if input field contains valid email
    if(!emailReset.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerText = 'Please enter a valid email';
      return false;
    }else{
      emailError.innerHTML   = '';
      return true
    }
  }

  submit = () => {
    let emailReset = (<HTMLInputElement>document.getElementById('email-reset'));
    let emailError = (<HTMLElement>     document.getElementById('email-error'));
        //checks if input field contains valid email
        if(!emailReset.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
          emailError.innerText = 'Please enter a valid email';
          return false;
        }else{
          emailError.innerHTML   = '';
          emailError.style.color= 'green'
          emailError.innerText = 'Thanks, if an account exist, you will recieve an email shortly.'
          return true
        }
  }
}

