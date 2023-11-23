import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssTwoComponent } from './scss-two.component';

describe('ScssTwoComponent', () => {
  let component: ScssTwoComponent;
  let fixture: ComponentFixture<ScssTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScssTwoComponent]
    });
    fixture = TestBed.createComponent(ScssTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
