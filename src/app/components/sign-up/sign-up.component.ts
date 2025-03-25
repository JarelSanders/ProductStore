import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    // Email format validation
    $('#email').on('keyup', function () {
      if (
        $('#email')
          .val()
          .match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
      ) {
        $('#message2').html('Correct email format').css('color', 'green');
      } else {
        $('#message2').html('Not correct email format').css('color', 'red');
      }
    });

    // Password match validation
    $('#password, #confirm_password').on('keyup', function () {
      if ($('#password').val() === $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else {
        $('#message').html('Not Matching').css('color', 'red');
      }
    });

    // Style input fields
    $('input').css('color', 'blue');
  }

  signUp(event: Event) {
    event.preventDefault(); 
    console.log('Form submitted');

    // Get input values
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let password = (<HTMLInputElement>document.getElementById('password')).value;
    let confirmpwd = (<HTMLInputElement>document.getElementById('confirm_password')).value;
    let error = <HTMLElement>document.getElementById('input-error');

    // Validate input fields
    if (
      !email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ||
      password === '' ||
      confirmpwd === '' ||
      password !== confirmpwd
    ) {
      $(error).html('Please enter valid credentials').css({
        color: 'red',
        'margin-left': '394px',
      });
      return;
    }
    

    
      // Create user data object
      const userData = {
        email: email,
        password: password,
      };

      // Make the POST request to register the user
      this.http.post('/signup', userData).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
      //

      // return true;

  }






}
