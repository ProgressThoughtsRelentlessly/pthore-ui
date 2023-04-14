export default class PublicUserProfileInfo {

    public email: String;
	public profilePicture: String;
	public followersCount: number;
	public socialMediaLinks: Map<String, String>;
	public monthlyPostCount: Map<String, Number>;
	public followedGroups: Array<String>;

}