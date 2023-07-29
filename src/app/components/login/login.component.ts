import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// FormControl

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signupUsers: any[] = [];
  loginObj: any = {
    email: '',
    password: ''
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4) ])
  });


  constructor(){}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData)
    }
  }


  loginUser(){
    console.warn(this.loginForm);
    let pwdChecked: number= (<HTMLInputElement>document.getElementById('password')).value.length;

    pwdChecked < 6 ? alert('correct length')  : 'Password Incorrect'

    
    
  }
  
  onLogin = () => {
    let password = (<HTMLInputElement>document.getElementById('password'));
    let error = (<HTMLElement>     document.getElementById('input-error'));
    let email = (<HTMLInputElement>document.getElementById('email'));

    //checks if input field contains valid email
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || password.value == '' || email.value == ''){
      error.innerText = 'Please enter valid credentials';
      return false;
    }else{
      error.innerText = '';
      return true
    }

  }   
}
