export class Todo {
    public id: number;
    public text: string;
    public iscomplete: boolean;

    constructor(text: string) {
       this.text = text;
       this.id = Math.random();
       this.iscomplete = false;
    }
}