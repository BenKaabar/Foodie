export class Food{
    id!:number; // id! required  
    name!:String;
    price!:number;
    tags?:String[]; // tags? optional value 
    favorite:boolean = false; // favorite shoud have constractor first or defined
    stars:number = 0;
    imageUrl!:String;
    origins!:String[];
    cookTime!:String;
}