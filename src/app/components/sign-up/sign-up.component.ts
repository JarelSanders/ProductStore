import { Component, OnInit } from '@angular/core';

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
  constructor(){}

  ngOnInit(): void {
    
  }

  onSignUp(){
  this.signupUsers.push(this.signupObj);//stores user that trying to signup into signupUsers array (push current object into the array)
  localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers))//(store the array into local storage)
  //reinitilize signupObj
  this.signupObj = {
    email: '',
    password: '',
    repeatpassword: ''
  }
  }
}
// https://www.youtube.com/watch?v=38JJ0hDQoos

// https://www.youtube.com/watch?v=NUHHbzau_9M&list=PL9_OU-1M9E_sjaUPfH3FIp8GtJrhJhTb8&index=2