import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsOneComponent } from './ts-one.component';

describe('TsOneComponent', () => {
  let component: TsOneComponent;
  let fixture: ComponentFixture<TsOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsOneComponent]
    });
    fixture = TestBed.createComponent(TsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
