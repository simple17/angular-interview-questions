import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOneComponent } from './angular-one.component';

describe('AngularOneComponent', () => {
  let component: AngularOneComponent;
  let fixture: ComponentFixture<AngularOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularOneComponent]
    });
    fixture = TestBed.createComponent(AngularOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
