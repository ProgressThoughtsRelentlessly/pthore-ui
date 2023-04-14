import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.css']
})
export class PostCardsComponent implements OnInit {

  @Input()
  cardMessage: { author: string, title: string, body: string, link: string};
  postAuthor: string = "Author";
  postTitle: string = "post title";
  cardBody: string = "Card body text to be added here";
  postLink: string = "https://www.google.com/";

  constructor() { }

  ngOnInit(): void {

    // this.postAuthor = this.cardMessage.author;
    // this.postTitle = this.cardMessage.title;
    // this.cardBody = this.cardMessage.body;
    // this.postLink = this.cardMessage.link;

  }



}
