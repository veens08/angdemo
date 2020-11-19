import {Component} from '@angular/core';
import {Framework} from './model/framework';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as util from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now = new Date();
  buttonPressed = 0;
  title = 'Een Ander Titel';
  structureForm: any;

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
  reactiveForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z.\'][a-zA-Z.\']*$'),
    ]),
    logo: new FormControl('', [
      Validators.required,
      Validators.pattern('^https?://.*$')
    ]),
    score: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10)
    ])
  });

  addFramework(): void {
    this.structureForm = util.inspect(this.reactiveForm, {depth: 1});
    const newFramework = {
      id: this.frameworks.length + 1,
      name: this.reactiveForm.value.name,
      logo: this.reactiveForm.value.logo,
      score: this.reactiveForm.value.score
    };
    this.frameworks.push(newFramework);
    this.reactiveForm.reset();
  }
}
