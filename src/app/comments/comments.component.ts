import { Component, Input, OnInit } from '@angular/core';
import PostComment from '../models/PostComment';
import PostComments from '../models/PostComments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comment: PostComments;

  comments: Array<PostComment>;
  
  customStyles: Object = {
    commentUnitContainer: {
        'display': 'flex',
        'flex-flow': 'column wrap',
        'justify-content': 'space-between',
        'align-items': 'flex-end',
        'width': '100%'
    
    },
    commentUnitStyle: {
      'display': 'flex',
      'flex-flow': 'column wrap',
      'background-color': 'var(--layer-bg-color)',
      'margin-top': '3px',
      'color': 'var(--layer-text-color)',
      'width': '80%',
      'border-radius': '20px'
    },
    commentUnitReplyStyle: {
      'display': 'flex',
      'flex-flow': 'column wrap',
      'background-color': 'var(--layer-bg-color)',
      'margin-top': '3px',
      'border-radius': '20px',
      'color': 'var(--layer-text-color)',
      'width': '60%'
    },
    commentText: {
      'text-align': 'center',
      'padding-top': '5px',
      'margin-top': '3px',
      'border-radius': '20px',
      'background-color': 'var(--layer-bg-color)',
      'color': 'var(--layer-text-color)'
    }
  }
  commentList: Array<PostComments> = new Array<PostComments>();

  constructor() { 
    
  }

  ngOnInit(): void {
    this.commentList.push(this.comment );
    
  }

}
