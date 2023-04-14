import { Component, OnInit } from '@angular/core';
import PostDto from '../models/PostDto';
import PostComments from '../models/PostComments';
import { SpringInteractionService } from '../spring-interaction.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  public postComments: PostComments = new PostComments();
  public postDto: PostDto;
  
  compStyles: Object = {
    imgStyle: {
      'height': 'auto',
      'max-width': '100%'
    },
    postTitleStyle: {
      'padding': '30px',
      'margin': 'auto'
    }

  } ; 

  constructor(private springService: SpringInteractionService, private route: ActivatedRoute) {

    this.postComments.comment = "The horse seems very strong. I think its good for the race.";
    this.postComments.commentReplies = new Map<String, String>();
    this.postComments.commentReplies = this.postComments.commentReplies.set("salsa stark", 'yes I think so too!')
    this.postComments.commentingUserEmail = "sudarshanrbhat.srb2@gmail.com";
    console.log(this.postComments)
  }

  ngOnInit(): void {
        this.springService.getPost(this.route.snapshot.queryParams['postId'] ).subscribe(res => {
          this.postDto = res;
        }, err => {
          console.log("unable to retrieve post data : ", err.getStatus(), err.getMessage());
        });
  }

}
