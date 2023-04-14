import PostReply from "./PostReply";

export default class PostComment {

	public commentId: string;
    public email: string;
	public comment: string;
	
	// key is the replier's email address, value is his comment. 
	public commentReplies:  Array<PostReply>;
}