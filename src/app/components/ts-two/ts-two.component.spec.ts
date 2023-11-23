import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsTwoComponent } from './ts-two.component';

describe('TsTwoComponent', () => {
  let component: TsTwoComponent;
  let fixture: ComponentFixture<TsTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsTwoComponent]
    });
    fixture = TestBed.createComponent(TsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
