export default class MiniPostRequestDto {
    public strategy: String;
	public inputString: String;
	public inputObject: Object = {}; // based on strategy. Array<String> to send postIds for example.
}