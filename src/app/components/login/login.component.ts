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
  
  onLogin(){
    // debugger
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)

    if(isUserExist != undefined){
      alert("User Login Successfully")
    }else{
      alert("Wrong Credentials")
    }
  }
  // https://www.youtube.com/watch?v=38JJ0hDQoos

  // sign-up/login api



  
}
