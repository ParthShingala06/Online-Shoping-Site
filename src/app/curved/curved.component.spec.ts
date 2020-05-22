import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedComponent } from './curved.component';

describe('CurvedComponent', () => {
  let component: CurvedComponent;
  let fixture: ComponentFixture<CurvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
