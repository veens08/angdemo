import {Component, OnInit} from '@angular/core';
import {Framework} from './model/framework';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as util from 'util';
import {FrameworkDaoService} from './services/framework-dao.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private frameworkDaoService: FrameworkDaoService) {
  }

  now = new Date();
  buttonPressed = 0;
  title = 'Een Ander Titel';
  structureForm: any;

  frameworks: Framework[] ;

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
  isAlive = true;


  ngOnInit(): void {
    const frameworks1: Observable<Framework[]> = this.frameworkDaoService.getFrameworks();
    frameworks1.subscribe((fr) => {this.frameworks = fr; });
  }



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

  changeIsAlive(): void {
    this.isAlive = !this.isAlive;
  }

}
