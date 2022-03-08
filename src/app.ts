
export {};
console.log("Hello typescript");
// khai báo 
type User = {
    id:number;
     name: string;
     status?: boolean; //required optional chaining
}
const a:number = 1;
const myName: string = "Nguyen Van Hai";
const status : boolean = true;
const myObj: object = {};
const numberArr:number[] = [1,2,3,4];
const stringArr:string[] = ["Hai","A"];
const objectArr:User[] = [{id:1,name:"Hai"},{id:2,name:"Hải"}];


// tsc -w tên file
/**
 * tsc --init
 * target: "es2018"
 * baseUrl: "./src"
 * outDir: "./dist
 *  "sourceMap": true,  
 */