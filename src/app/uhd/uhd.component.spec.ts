import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UhdComponent } from './uhd.component';

describe('UhdComponent', () => {
  let component: UhdComponent;
  let fixture: ComponentFixture<UhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
