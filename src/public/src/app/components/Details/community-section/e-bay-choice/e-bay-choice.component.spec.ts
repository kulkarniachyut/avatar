import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBayChoiceComponent } from './e-bay-choice.component';

describe('EBayChoiceComponent', () => {
  let component: EBayChoiceComponent;
  let fixture: ComponentFixture<EBayChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBayChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBayChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
