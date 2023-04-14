import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-domain-tiles',
  templateUrl: './domain-tiles.component.html',
  styleUrls: ['./domain-tiles.component.css']
})
export class DomainTilesComponent implements OnInit, OnChanges {

  @Input()
  domainMessage: { domainName: string, link: string };

  domainName: string;
  domainPostslink: string

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.domainName = this.domainMessage.domainName;
    this.domainPostslink = this.domainMessage.link;
  }

  ngOnInit(): void {
    this.domainName = this.domainMessage.domainName;
    this.domainPostslink = this.domainMessage.link;
  }

}
