import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J6Component } from './j6.component';

describe('J6Component', () => {
  let component: J6Component;
  let fixture: ComponentFixture<J6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
