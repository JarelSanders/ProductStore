import { Component, OnInit } from '@angular/core';

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
  // https://www.youtube.com/watch?v=38JJ0hDQoos

  // https://www.youtube.com/watch?v=NUHHbzau_9M&list=PL9_OU-1M9E_sjaUPfH3FIp8GtJrhJhTb8&index=2
  constructor(){}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData)
    }
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
