import '../css/style.css'

export class Project {
    public title: string;
    public description: string;
    public image: string;
    public link: string;

    constructor(title: string, description: string, image: string, link: string) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}