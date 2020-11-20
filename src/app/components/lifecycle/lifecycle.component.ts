import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy {
  isAlive = true;
  private interval: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('[lc] onInit gaat af');
    this.interval = setInterval(() => {
      console.log('print elk interval naar de console');
    }, 500);
  }

  switchIsAlive(): void {
    this.isAlive = !this.isAlive;
  }

  ngOnDestroy(): void {
    console.log('[lc] onDestroy gaat af');
    clearInterval(this.interval);
  }
}
