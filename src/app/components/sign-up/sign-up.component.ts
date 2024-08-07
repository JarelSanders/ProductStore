import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';


// using jquery
declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', '../../../styles.css'],
})
export class SignUpComponent implements OnInit {
  data: any;
  // signupUsers: any[] = [];
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    // this.dataService.getData().subscribe((
    //   data: any
    // ) => {
    //   this.data = data;
    // })
  
       // checks if email field is correcyt email format
    $('#email').on('keyup', function () {
      if ($('#email').val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
         $('#message2')
        .html('Correct email format')
        .css('color', 'green');
      } else $('#message2').html('Not correct email format').css('color', 'red');
    });

    // checks if both password and repeat password fields match
    $('#password, #confirm_password').on('keyup', function () {
      if ($('#password').val() === $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else $('#message').html('Not Matching').css('color', 'red');
    });

    // all input tags blue
    $('input').css('color', 'blue');
  }

  //method onSignUp(){
  signUp() {

        this.dataService.getData().subscribe((
      data: any
    ) => {
      this.data = data;
    })

    let pwd: string = (<HTMLInputElement>document.getElementById('password')).value;
    let pwdRepeat: string = (<HTMLInputElement>document.getElementById('confirm_password')).value;
    let email  = (<HTMLInputElement>document.getElementById('email'));
    let password = (<HTMLInputElement>document.getElementById('password'));
    let checkbox = (<HTMLInputElement>document.getElementById('checkbox'));
    let error = (<HTMLElement>document.getElementById('input-error'));
    let confirmpwd = (<HTMLInputElement>document.getElementById('confirm_password'))

    // this.signupUsers.push(this.signupObj); //stores user that trying to signup into signupUsers array (push current object into the array)
    // localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers)); //(store the array into local storage)
    // //reinitilize signupObj
    // this.signupObj = {
    //   email: String,
    //   password: String,
    //   repeatpassword: String,
    // };

    if (
      $(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) ||
      $(password.value == '') ||
      $(confirmpwd.value == '') ||
      $(checkbox.value == '')
      ){
    $(error).html('Please enter valid credentials').css({
      'color': 'red',
      'margin-left': '394px' 
    }); 
      return false
    }
   
    else{
      $(email.value = '');
      $(error.innerText != error.innerText);
      $(password.value = '');
      email.style.border = '';
      password.style.border = '';
      return true;
    }
  }
}
