import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapecreationComponent } from './etapecreation.component';

describe('EtapecreationComponent', () => {
  let component: EtapecreationComponent;
  let fixture: ComponentFixture<EtapecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
