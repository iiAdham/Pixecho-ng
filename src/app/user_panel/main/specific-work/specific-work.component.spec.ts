import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificWorkComponent } from './specific-work.component';

describe('SpecificWorkComponent', () => {
  let component: SpecificWorkComponent;
  let fixture: ComponentFixture<SpecificWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificWorkComponent]
    });
    fixture = TestBed.createComponent(SpecificWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
