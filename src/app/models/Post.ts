export class Post {
    /*
    @elementTypes: possible values are: 
        title, link, paragraph, image 
    @data the values are strictly html strings.
    */

    constructor(private postTitle: string, private elementTypes: Array<String>,
        private data: Array<String>) {

    }

    getPostTitle() {
        return this.postTitle;
    }
    getElementTypes() {
        return this.elementTypes;
    }

    getData() {
        return this.data;
    }

    setElementType(type: string): void {
        this.elementTypes.push(type);
    }
    setDatum(datum: String) {
        this.data.push(datum);
    }
} 