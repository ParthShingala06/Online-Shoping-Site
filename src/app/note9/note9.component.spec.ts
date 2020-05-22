import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Note9Component } from './note9.component';

describe('Note9Component', () => {
  let component: Note9Component;
  let fixture: ComponentFixture<Note9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Note9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Note9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
