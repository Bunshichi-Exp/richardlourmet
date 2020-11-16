import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoireauxquestionsComponent } from './foireauxquestions.component';

describe('FoireauxquestionsComponent', () => {
  let component: FoireauxquestionsComponent;
  let fixture: ComponentFixture<FoireauxquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoireauxquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoireauxquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
