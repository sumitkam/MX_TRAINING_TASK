import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAppComponent } from './banking-app.component';

describe('BankingAppComponent', () => {
  let component: BankingAppComponent;
  let fixture: ComponentFixture<BankingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
