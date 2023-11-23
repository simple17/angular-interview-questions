import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssOneComponent } from './scss-one.component';

describe('ScssOneComponent', () => {
  let component: ScssOneComponent;
  let fixture: ComponentFixture<ScssOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScssOneComponent]
    });
    fixture = TestBed.createComponent(ScssOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
