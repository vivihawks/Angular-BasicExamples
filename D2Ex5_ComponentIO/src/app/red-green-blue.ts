export class RedGreenBlue {

    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;


<<<<<<< HEAD
   // public style: string;
=======
   //public style: string;
>>>>>>> c2747ff (Angular 12 Upgrade)

    //rgb(1,10,100);
    public get style(): string {
        return 'rgb(' +
            this.red + ',' +
            this.green + ',' +
            this.blue + ')';
    }
}

//rgb.style