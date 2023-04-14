import { join } from "path";

export class User {
    private id: Number;
    private name: String;
    private email: String;
    private mobile: String;
    private joinDate: Date

    constructor() {

    }

    public User (id: Number, name: String, email: String, mobile: String, joinDate: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.joinDate = joinDate;
    }

    public getid(): Number {
        return this.id;
    }

    public getName(): String {
        return this.name;
    }
    public getEmail(): String {
        return this.name;
    }
    public getMobile(): String {
        return this.name;
    }
    public getJoinDate(): String {
        return this.name;
    }
}
