import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import PostDto from './models/PostDto';

@Injectable({
  providedIn: 'root'
})
export class SpringInteractionService {



  private googleLoginUrl =  "http://localhost:8000/loginGoogle";
  private basicLoginUrl = "http://localhost:8000/api/login";
  private registerUrl = "http://localhost:8000/api/register";

/*  psl-1 fetch api's 
*/
  private GET_all_post_cards_url = "http://localhost:8001/api/cards"
  private GET_all_available_domains = "http://localhost:8001/api/domains"
  private POST_paginated_mini_posts_url = "http://localhost:8001/api/mini-posts/"
  private GET_search = "http://localhost:8001/api/search/"
  private GET_public_profile = "http://localhost:8001/api/public-profile/"
  private POST_create_post = "http://localhost:8020/api/posts/v2/create"
  private GET_post = "http://localhost:8001/api/post/"
  private POST_update_profile = "http://localhost:8001/api/update-profile"
  private GET_download_post_image = "http://localhost:8001/api/download/"
  private POST_update_post = "http://localhost:8001/api/post/update"
  private PATCH_upvote_post = "http://localhost:8001/api/upvote/"
  
  constructor( private httpClient: HttpClient) { }
  

  public registerUser(registrationDetails: any) {
    
    let username = registrationDetails.username.split(" ");
    let firstname = username[0];
    let lastname = username[1];
    registrationDetails.firstname = firstname;
    registrationDetails.lastname = lastname;

    console.log(registrationDetails);
    this.httpClient.post(this.registerUrl, registrationDetails).subscribe(res => {
      console.log(res);
    },
    err => console.log(err));
  }

  public loginWithGoogle() {
    this.httpClient.get(this.googleLoginUrl).subscribe(response => {
      console.log(response);
    }, (error) => {
      console.log(error.getStatus(), error.getMessage());
    })
  }



  public loginWithBasicAuth(userDetails: any) {
    userDetails.email = userDetails.username;
    this.httpClient.post(this.basicLoginUrl, userDetails).subscribe(response => {
      console.log(response);
    }, (error) => {
      console.log(error.getStatus(), error.getMessage());
    })
  }


  public getCookie(name: string): string {
    
    const cookies = document.cookie.split(";");
    let cookieValue = "";
    cookies.forEach((c) => {
      
      if(c.includes(name)) {
        
        cookieValue = c.split("=")[1];
      }
    })
    return cookieValue;
  }

  public getHeaders(): HttpHeaders {
    
    let email: string = this.getCookie("email");
    let jwt: string = this.getCookie("jwt");

    let headers: HttpHeaders = new HttpHeaders({
      'email': email,
      'jwt': jwt
    });

    return headers;
  }

  public createNewPost(formData: FormData) {
    
    let options = {
      headers: this.getHeaders()
    }
    

    this.httpClient.post(this.POST_create_post, formData, options).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  
  
  
  
  public sendPostUpdate(postDto: PostDto, file: File): PostDto {
    // throw new Error('Method not implemented.');
    let formData = new FormData();
    // Object.keys(postDto).forEach(key => formData.append(key, postDto[key]));
    formData.append("postRequest", JSON.stringify(postDto));
    formData.append("files", file);

    this.httpClient.post(this.POST_create_post, formData).subscribe(res => {
       console.log(res);
    }, err => {
      console.log(err);
    });

    console.log("operation sent to backend ", postDto.operation);
    return postDto;
  }




  public submitUserProfileUpdate(userProfileData: FormGroup) {
    this.httpClient.post(this.POST_update_profile, userProfileData).subscribe(
      res => {

      },
      err => {
        
      }
    );
  } 

  public getPost(postId: string): Observable<PostDto> {
    let options = {
      headers: this.getHeaders()
    }
    return this.httpClient.get<PostDto>(this.GET_post, options);
  }

}
