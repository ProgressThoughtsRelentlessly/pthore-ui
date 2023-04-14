import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-home-page',
  templateUrl: './personal-home-page.component.html',
  styleUrls: ['./personal-home-page.component.css']
})
export class PersonalHomePageComponent implements OnInit {

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
  domainMessage: {
    domainName: string,
    link: string
  } = {
    "domainName": "domain-1",
    "link" : "https://www.google.com/"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
