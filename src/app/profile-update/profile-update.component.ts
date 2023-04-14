import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {SpringInteractionService} from '../spring-interaction.service'; 


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private springService: SpringInteractionService) { }
  public userProfileData;
  public domainItems: Array<String> = ['domain1', 'domain2', 'domain3'];
  public followedItems: Array<String> = ['followed1', 'followed2', 'followed3'];

  ngOnInit(): void {
    this.userProfileData = this.formBuilder.group({
      email: ['anonymous@life.earth'],
      firstname: ['john'],
      lastname: ['doe'],
      oldPassword: [''],
      newPassword: [''],
      profilePicture: ['image-url'],
      mobileNumber: ['0 x 10'],
      bio: ['']
    });
  }

  submitUserProfileUpdate() {
    this.springService.submitUserProfileUpdate(this.userProfileData);
  }

}
