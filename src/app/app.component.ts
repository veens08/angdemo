import {Component} from '@angular/core';
import {Framework} from './model/framework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now = new Date();
  buttonPressed = 0;
  title = 'Een Ander Titel';
  frameworks: Framework[] = [
    {
      id: 1,
      name: 'Angular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1280px-Angular_full_color_logo.svg.png',
      score: 10
    },
    {
      id: 2,
      name: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png',
      score: 6
    },
    {
      id: 3,
      name: 'Vuejs',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png',
      score: 8
    },
  ];

  veranderTitel() {
    this.buttonPressed = this.buttonPressed + 1;
    this.title = ' pressed ' + this.buttonPressed + ' times';
    this.title = ` pressed ${this.buttonPressed} times`;
  }

  addFramework() {
    let ember: Framework;
    ember = {
      id: 4,
      name: 'Ember',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png',
      score: 9
    };
    this.frameworks.push(ember);
  }
}
