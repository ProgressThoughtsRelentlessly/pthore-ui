export default class PostComments {

    public commentingUserEmail: String;
	public comment: String;
	// key is the replier's email address, value is his comment. 
	public commentReplies: Map<String, String>;
}