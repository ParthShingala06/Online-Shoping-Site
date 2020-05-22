import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyhubComponent } from './familyhub.component';

describe('FamilyhubComponent', () => {
  let component: FamilyhubComponent;
  let fixture: ComponentFixture<FamilyhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
