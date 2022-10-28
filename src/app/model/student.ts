export class studentCls {

    rollNo: number;
    name: string;
    class: string;
    section: string;
    age: number;
    cnt: number;

    constructor(id:number, name:string,cls:string,section:string, age:number,contact:number){

        this.rollNo = id;
        this.name = name;
        this.class = cls;
        this.section = section;
        this.age = age;
        this.cnt = contact;
    }

}


