import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit, OnChanges {
  
  stylesForGraph = [];

  constructor() {
    
   }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.stylesForGraph = this.buildGraph();
  }

  buildGraph(): {}[] {
    let heights = [3, 4, 6, 3, 2, 9, 0, 1, 6, 4];
    let arr = [];
    for(let h of heights) {
      arr.push(
         {
          "height": h * 10 + 20 + "px",
          "width": "55px",
          "background-color": "var(--layer-bg-color)",
          "color": "var(--layer-text-color)"
        }
      );
    }
    return arr;
  }


}
