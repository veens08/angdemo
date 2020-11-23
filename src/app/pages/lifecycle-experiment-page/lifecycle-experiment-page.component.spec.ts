import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExperimentPageComponent } from './lifecycle-experiment-page.component';

describe('LifecycleExperimentPageComponent', () => {
  let component: LifecycleExperimentPageComponent;
  let fixture: ComponentFixture<LifecycleExperimentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleExperimentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleExperimentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
