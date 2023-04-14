import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.css']
})
export class MiniPostComponent implements OnInit {

  @Input()
  miniPostMessage: {
    author: string,
    createdTs: string,
    body: string,
    description: string
  } = {
    author: "some random name",
    createdTs: "01-01-1970",
    body: "THis is an awesome post . you would cherish it if you would read it.",
    description: "This is an advertisement post"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
