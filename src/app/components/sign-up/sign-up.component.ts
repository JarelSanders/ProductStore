import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signupUsers: any[] = [];
  signupObj:any = {
    email: '',
    password: '',
    repeatpassword: ''
  }

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(18) ]),
    repeatPassword: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(18) ])
  });


  constructor(){}

  ngOnInit(): void {
      // checks if both password and repeat password fields match
    $('#password, #confirm_password').on('keyup', function () {
      if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
      }else 
        $('#message').html('Not Matching').css('color', 'red');
    });


   


    // all input tags blue
    $("input").css("color","blue")
  }

 

  // onSignUp(){
  signUp(){
    let pwd = (<HTMLInputElement>document.getElementById('')).value;
    let pwdRepeat = (<HTMLInputElement>document.getElementById('')).value;


    this.signupUsers.push(this.signupObj);//stores user that trying to signup into signupUsers array (push current object into the array)
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers))//(store the array into local storage)
    //reinitilize signupObj
    this.signupObj = {
      email: '',
      password: '',
      repeatpassword: ''
    }


        // https://www.geeksforgeeks.org/how-to-validate-email-id-in-jquery/
    // validates if email is an actual email
    $('#email').on('keyup',function(){

      if ($('#email').val() == '') {
       // $('#email').prop('required',true);
       // $("[name='email']").alert("required", true)
      alert('test')
 
      }
       
 
 
     })
     if ($('#email').val() == null) {
      // $('#email').prop('required',true);
      // $("[name='email']").alert("required", true)
     alert('test')

     }
  }
}
// https://www.youtube.com/watch?v=38JJ0hDQoos

// https://www.youtube.com/watch?v=NUHHbzau_9M&list=PL9_OU-1M9E_sjaUPfH3FIp8GtJrhJhTb8&index=2