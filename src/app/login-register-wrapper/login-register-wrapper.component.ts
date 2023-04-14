import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-wrapper',
  templateUrl: './login-register-wrapper.component.html',
  styleUrls: ['./login-register-wrapper.component.css']
})
export class LoginRegisterWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showLogin(): void {
    document.getElementById("login-comp").style.display = "block";
    document.getElementById("register-comp").style.display = "none";
  }

  showRegister(): void {
    document.getElementById("login-comp").style.display = "none";
    document.getElementById("register-comp").style.display = "block";
  }

  

}
