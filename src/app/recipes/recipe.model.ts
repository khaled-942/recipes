export class Recipe{
    public name?:string;
    public description?:string;
    public imgSrc?:string;

    constructor(name:string,desc:string,imgSrc:string){
        this.name = name;
        this.description = desc;
        this.imgSrc = imgSrc;
    }
}