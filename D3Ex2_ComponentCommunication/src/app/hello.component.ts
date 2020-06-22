import { Input, Component, Optional, NgZone } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
	selector: 'app-hello',
	template: `<p [ngStyle]="{ 'color': color }">Hello, {{name}}!</p>`,
})
export class HelloComponent {
  @Input() name: string;
  color = 'black';

  constructor(@Optional() private parentComp:AppComponent, zone: NgZone ) {
    zone.runOutsideAngular(() => {
      setInterval(() => {
        console.log(`Logging from Outside Angular Zone; current time is ${Date.now()}`)
      }, 1000);
      });
  }

  private getRandomColor() {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      this.parentComp.text = `This text is set by the child component - Hello Component. Color is ${color}`
      return color;
  }

  randomizeColor() {
    this.color = this.getRandomColor();
  }
}
