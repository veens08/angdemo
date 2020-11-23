import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-experiment-pagina',
  templateUrl: './pipe-experiment-pagina.component.html',
  styleUrls: ['./pipe-experiment-pagina.component.css']
})
export class PipeExperimentPaginaComponent implements OnInit {

  now = new Date();
  buttonPressed = 0;
  title = 'Een Ander Titel';

  constructor() { }

  ngOnInit(): void {
  }

}
