import PostComment from "./PostComment";
import PostNode from "./PostNode";

export default class PostDto {
    
	public _id: string;
	
	public operation: string;

	public authorEmail: string;

	public nodeId: string;
	
	public postTitle: string;
	
	public postStatus: string; // 3 possible statuses: drafting, saved, created
	
	public postNodes: Array<PostNode>;
	
	public postComments: Array<PostComment>;
    
}