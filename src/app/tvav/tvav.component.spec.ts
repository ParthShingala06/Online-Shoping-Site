import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvavComponent } from './tvav.component';

describe('TvavComponent', () => {
  let component: TvavComponent;
  let fixture: ComponentFixture<TvavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
