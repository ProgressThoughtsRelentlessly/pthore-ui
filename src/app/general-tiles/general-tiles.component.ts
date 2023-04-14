import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-tiles',
  templateUrl: './general-tiles.component.html',
  styleUrls: ['./general-tiles.component.css']
})
export class GeneralTilesComponent {

  @Input()
  public data: Array<string>;

  constructor() { }


}
