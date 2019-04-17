import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityChoiceComponent } from './community-choice.component';

describe('CommunityChoiceComponent', () => {
  let component: CommunityChoiceComponent;
  let fixture: ComponentFixture<CommunityChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
