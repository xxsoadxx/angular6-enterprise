import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsmenuComponent } from './stepsmenu.component';

describe('StepsmenuComponent', () => {
  let component: StepsmenuComponent;
  let fixture: ComponentFixture<StepsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
