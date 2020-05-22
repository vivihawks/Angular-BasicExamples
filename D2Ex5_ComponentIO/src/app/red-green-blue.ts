import { sanitizeStyle } from "@angular/core/src/sanitization/sanitization";

export class RedGreenBlue {

    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;


   // public style: string;

    //rgb(1,10,100);
    public get style(): string {
        return 'rgb(' +
            this.red + ',' +
            this.green + ',' +
            this.blue + ')';
    }
}

//rgb.style