import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Quill } from 'quill';
import PostDto from '../models/PostDto';
import PostNode from '../models/PostNode';
import { SpringInteractionService } from '../spring-interaction.service';

@Component({
  selector: 'app-personal-profile-view',
  templateUrl: './personal-profile-view.component.html',
  styleUrls: ['./personal-profile-view.component.css']
})
export class PersonalProfileViewComponent implements OnInit {

  // custom styles for dynamic elements
  compStyles: Object = {
    imgStyle: {
      'height': 'auto',
      'max-width': '100%'
    },
    postTitleStyle: {
      'padding': '30px',
      'margin': 'auto'
    },
    postBuilderRearrange: {
      // 'height': '3px',
      // 'width': '4px'
    }

  } ; 

  // quill properties
  blurred = false
  focused = false
  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['code-block', 'link']
    ]
  };

  // stat graph variables
  stylesForGraph = [];
  
  // form variable
  formDetails: FormGroup;
  postDto: PostDto = new PostDto();
  formData = new FormData();

  constructor(private formBuilder: FormBuilder, private springService: SpringInteractionService) {
    
  }

  ngOnInit(): void {
    
    this.stylesForGraph = this.buildGraph();
    this.formDetails = this.formBuilder.group({
      editor: ['editor'],
      images: ['']
    });
  }
  
  private sortPostNodes(postNodes: Array<PostNode>) {
    postNodes.sort((oldVal, newVal) => Number(oldVal.sectionIdx) - Number(newVal.sectionIdx));
  }

  private swap(array: Array<any>, idx1: number, idx2: number){
    var temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  }

  moveUp(event, idx) {

    if(idx == this.postDto.postNodes.length -1)
      return;
    
    let postNodes: Array<PostNode> = this.postDto.postNodes; 
    this.postDto.operation = "move-up";
    
    postNodes[idx].sectionIdx += 1;
    postNodes[idx +1].sectionIdx -= 1;
    this.swap(postNodes, idx, idx +1);

    console.log("post node elements: ", postNodes);
    this.springService.sendPostUpdate(this.postDto, null);
   // console.log(this.postData);
  }
  moveDown(event, idx) {
    if(idx == 0)
    return;
    this.postDto.operation = "move-down";

    let postNodes: Array<PostNode> = this.postDto.postNodes; 
    postNodes[idx].sectionIdx -= 1;
    postNodes[idx -1].sectionIdx += 1;
    this.swap(postNodes, idx, idx -1);
  
    console.log("post node elements: ", postNodes);
    this.springService.sendPostUpdate(this.postDto, null);
  }
  removeStep(event, idx) {

    let postNodes: Array<PostNode> = this.postDto.postNodes; 
    let removedPostNode = postNodes[idx];
    postNodes.splice(idx, 1);
    this.postDto.nodeId = removedPostNode.nodeId;
    this.postDto.operation = "remove-section";
    
    while(idx < postNodes.length) {
      postNodes[idx].sectionIdx -= 1;
      idx++;
    }
    this.springService.sendPostUpdate(this.postDto, null);
  }

  async sendImageToBackendService(postDto: PostDto, file: File): Promise<PostDto> {
    postDto = this.springService.sendPostUpdate(postDto, file);
    this.postDto = postDto;
    return postDto;
  }

  async addPostChunkImage(event): Promise<void> {
    
    var file = event.target.files[0];
    this.formData.append("files", file);
    this.formData.append('metadata', 'image');

    var fileReader = new FileReader();
    
    fileReader.onload = (event) => {
      // this.imgSrc.push(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
    // ----xxx----
    let postNode: PostNode = new PostNode();
    postNode.textData = "";
    if(!this.postDto.postNodes)
      this.postDto.postNodes = new Array<PostNode>();
    postNode.sectionIdx = this.postDto.postNodes.length;
    if(this.postDto.postNodes.length > 0) {
      postNode.nodeId = String( 1 + Number(this.postDto.postNodes.map(node => node.nodeId).reduce((prev, curr) => {
        return prev > curr ? prev: curr;
      })));
    } else {
      postNode.nodeId = "0";
    }
    postNode.type = "image";
    this.postDto.postNodes.push(postNode);
    this.postDto.operation = "add-image";
    if(!this.postDto.authorEmail)
      this.postDto.authorEmail = localStorage.getItem("email");

    
    this.postDto = await this.sendImageToBackendService(this.postDto, file);
  }
  
  async addPostChunkParagraph() {
    let text: string = this.formDetails.get('editor').value;
    let postNode: PostNode = new PostNode();
    postNode.textData = text;
    if(!this.postDto.postNodes)
      this.postDto.postNodes = new Array<PostNode>();
    postNode.sectionIdx = this.postDto.postNodes.length;

    if(this.postDto.postNodes.length > 0) {
      postNode.nodeId = String( 1 + Number(this.postDto.postNodes.map(node => node.nodeId).reduce((prev, curr) => {
        return prev > curr ? prev: curr;
      })));
    } else {
      postNode.nodeId = "0";
    }
    postNode.type = "para";

    this.postDto.postNodes.push(postNode);
    this.postDto.operation = "add-para";
    if(!this.postDto.authorEmail)
      this.postDto.authorEmail = localStorage.getItem("email");
    this.postDto = this.springService.sendPostUpdate(this.postDto, null);
  }

  savePostAsDraft(event) {
    this.postDto.operation = "save-post";
    this.springService.sendPostUpdate(this.postDto, null);
  }

  onSubmit(event) {
    this.postDto.operation = "create-post";
    this.springService.sendPostUpdate(this.postDto, null);
  }

  async previewPost() {
    // document.getElementsByClassName("post-preview")[0].innerHTML =  this.formDetails.get('editor').value;
     
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


  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
    this.focused = false
    this.blurred = true
  }

}