import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { SpringInteractionService } from '../spring-interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private springService: SpringInteractionService) {

  }

  ngOnInit(): void {
  }

  lfDetails = this.formBuilder.group({
    username: ['sam', [Validators.required, Validators.minLength(3)]],
    password: ['1234']
  });

  loginUser() {
    console.log(this.lfDetails.value );
    this.springService.loginWithBasicAuth(this.lfDetails.value);
  }


}
