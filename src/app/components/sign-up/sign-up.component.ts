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
    event.preventDefault(); // Prevent the default form submission

    console.log('Form submitted');

    this.http.get('/data').subscribe(
      (data) => {
        console.log('Received data:', data);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );



    let email = <HTMLInputElement>document.getElementById('email');
    let password = <HTMLInputElement>document.getElementById('password');
    let confirmpwd = <HTMLInputElement>(
      document.getElementById('confirm_password')
    );
    let checkbox = <HTMLInputElement>document.getElementById('checkbox');
    let error = <HTMLElement>document.getElementById('input-error');

    // Validate input fields
    if (
      !email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ||
      password.value == '' ||
      confirmpwd.value == '' ||
      checkbox.checked == false
    ) {
      $(error).html('Please enter valid credentials').css({
        color: 'red',
        'margin-left': '394px',
      });
      return false;
    } else {
      email.value = '';
      password.value = '';
      error.innerText = '';
      email.style.border = '';
      password.style.border = '';

      // Make the HTTP call here
      this.http.get('/data').subscribe(
        (data) => {
          console.log('Received data:', data);
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );

      return true;
    }
  }
}
