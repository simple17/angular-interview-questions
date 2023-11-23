import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularThreeComponent } from './angular-three.component';

describe('AngularThreeComponent', () => {
  let component: AngularThreeComponent;
  let fixture: ComponentFixture<AngularThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularThreeComponent]
    });
    fixture = TestBed.createComponent(AngularThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
