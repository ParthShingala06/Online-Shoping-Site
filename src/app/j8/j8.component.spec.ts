import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J8Component } from './j8.component';

describe('J8Component', () => {
  let component: J8Component;
  let fixture: ComponentFixture<J8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
