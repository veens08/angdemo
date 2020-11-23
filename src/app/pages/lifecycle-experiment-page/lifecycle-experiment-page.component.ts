import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-experiment-page',
  templateUrl: './lifecycle-experiment-page.component.html',
  styleUrls: ['./lifecycle-experiment-page.component.css']
})
export class LifecycleExperimentPageComponent implements OnInit {

  constructor() { }

  isAlive = true;




  changeIsAlive(): void {
    this.isAlive = !this.isAlive;
  }

  ngOnInit(): void {
  }

}
