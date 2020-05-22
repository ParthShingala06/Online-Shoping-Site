import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S10Component } from './s10.component';

describe('S10Component', () => {
  let component: S10Component;
  let fixture: ComponentFixture<S10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
