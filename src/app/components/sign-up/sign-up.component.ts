import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    email: '',
    password: '',
    repeatpassword: '',
  };

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(18),
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(18),
    ]),
  });

  constructor() {}

  ngOnInit(): void {
    // Email input validation
    // let email2 = <HTMLInputElement>document.getElementById('#email');
    // email2.addEventListener('keyup',(e) =>{
    //   alert('Hi')
    // })
    // https://www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
    //www.youtube.com/watch?v=CE5Sdb45NXE
   
       // checks if email field is correcyt email format
    $('#email').on('keyup', function () {
      if ($('#email').val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
         $('#message2')
        .html('Correct email format')
        .css('color', 'green');
      } else $('#message2').html('Not correct email format').css('color', 'red');
    });

    //checks if terms and services box is checked.
    // $('#checkbox').on('checked', function(){
    //   if($(#))

    // })

    // checks if both password and repeat password fields match
    $('#password, #confirm_password').on('keyup', function () {
      if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else $('#message').html('Not Matching').css('color', 'red');
    });

    // all input tags blue
    $('input').css('color', 'blue');
  }

  // onSignUp(){
  signUp() {
    let pwd: string = (<HTMLInputElement>document.getElementById('password')).value;
    let pwdRepeat: string = (<HTMLInputElement>document.getElementById('confirm_password')).value;
    let email  = (<HTMLInputElement>document.getElementById('email'));
    let password = (<HTMLInputElement>document.getElementById('password'));
    let checkbox = (<HTMLInputElement>document.getElementById('checkbox'));
    let error = (<HTMLElement>     document.getElementById('input-error'));
    let confirmpwd = (<HTMLInputElement>document.getElementById('confirm_password'))

    this.signupUsers.push(this.signupObj); //stores user that trying to signup into signupUsers array (push current object into the array)
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers)); //(store the array into local storage)
    //reinitilize signupObj
    this.signupObj = {
      email: String,
      password: String,
      repeatpassword: String,
    };

    
    // validates if email is an actual email
    // $('#email').on('keyup', function () {
    //   if ($('#email').val() == '') {
    //     alert('test');
    //   }
    // });
    // if ($('#email').val() == null) {
    //   alert('test');
    // }

    //checks if input field contains valid email
    // if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || password.value == '' || confirmpwd.value == '' || checkbox.value == ''){
    //   error.innerText = 'Please enter valid credentials';
    //   password.style.border = '5px solid red';
    //   checkbox.style.border = '15px solid red';
    //   email.style.border = '5px solid red';
    //   confirmpwd.style.border = '5px solid red';

    //   return false;
    // }else{
    //   error.innerText = '';
    //   password.style.border = '';
    //   checkbox.style.border = '15px solid red';
    //   email.style.border = '5px solid red';
    //   confirmpwd.style.border = '5px solid red';
    //   return true;
    // }
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || password.value == '' || confirmpwd.value == '' || checkbox.value == ''){
      error.innerText = 'Please enter valid credentials';
      email.style.border = '5px solid red';
      password.style.border = '5px solid red';
      checkbox.style.border = '15px solid red';
      email.style.border = '5px solid red';
      confirmpwd.style.border = '5px solid red';
      return false
    }else if (password.value != null){
      // error.innerText = 'Please enter valid credentials';
      password.style.border = '';
      return false
    }
    
    else{
      // error.innerText = '';
      // email.style.border = '';
      // password.style.border = '';
      return true;
    }
  }
}
// https://www.youtube.com/watch?v=38JJ0hDQoos

// https://www.youtube.com/watch?v=NUHHbzau_9M&list=PL9_OU-1M9E_sjaUPfH3FIp8GtJrhJhTb8&index=2
