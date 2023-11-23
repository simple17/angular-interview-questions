import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTwoComponent } from './angular-two.component';

describe('AngularTwoComponent', () => {
  let component: AngularTwoComponent;
  let fixture: ComponentFixture<AngularTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularTwoComponent]
    });
    fixture = TestBed.createComponent(AngularTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
