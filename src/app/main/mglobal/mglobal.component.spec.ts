import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MglobalComponent } from './mglobal.component';

describe('MglobalComponent', () => {
  let component: MglobalComponent;
  let fixture: ComponentFixture<MglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
