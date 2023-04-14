import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { SpringInteractionService } from '../spring-interaction.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private springService: SpringInteractionService) { }

  ngOnInit(): void {
  }

  registrationDetails = this.formBuilder.group({
    username: ['Steve', [Validators.minLength(3)]],
    password: ['123'],
    rePassword: ['123'],
    email: [''],
    mobile: [1234567891]
  });
 
  public registerUser() {

    console.log(this.registrationDetails.value);
    this.springService.registerUser(this.registrationDetails.value)
  }
}
