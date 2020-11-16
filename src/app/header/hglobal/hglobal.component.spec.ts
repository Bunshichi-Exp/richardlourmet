import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HglobalComponent } from './hglobal.component';

describe('HglobalComponent', () => {
  let component: HglobalComponent;
  let fixture: ComponentFixture<HglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
