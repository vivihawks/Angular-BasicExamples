<<<<<<< HEAD
=======
import { sanitizeStyle } from "@angular/core/src/sanitization/sanitization";

>>>>>>> a37972891427254680a219373cdec07372fe2c9f
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