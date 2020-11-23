import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExperimentPaginaComponent } from './pipe-experiment-pagina.component';

describe('PipeExperimentPaginaComponent', () => {
  let component: PipeExperimentPaginaComponent;
  let fixture: ComponentFixture<PipeExperimentPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeExperimentPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExperimentPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
