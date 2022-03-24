import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCaliComponent } from './emi-cali.component';

describe('EmiCaliComponent', () => {
  let component: EmiCaliComponent;
  let fixture: ComponentFixture<EmiCaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiCaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
