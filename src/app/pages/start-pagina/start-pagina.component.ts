import {Component, OnInit} from '@angular/core';
import {FrameworkDaoService} from '../../services/framework-dao.service';
import {Framework} from '../../model/framework';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import util from 'util';

@Component({
  selector: 'app-start-pagina',
  templateUrl: './start-pagina.component.html',
  styleUrls: ['./start-pagina.component.css']
})
export class StartPaginaComponent implements OnInit {

  constructor(private frameworkDaoService: FrameworkDaoService) {
  }

  structureForm: any;

  frameworks: Framework[];

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

  ngOnInit(): void {
    const frameworks1: Observable<Framework[]> = this.frameworkDaoService.getFrameworks();
    frameworks1.subscribe((fr) => {
      this.frameworks = fr;
    });
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
}
