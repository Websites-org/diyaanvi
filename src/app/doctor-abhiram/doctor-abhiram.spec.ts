import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAbhiram } from './doctor-abhiram';

describe('DoctorAbhiram', () => {
  let component: DoctorAbhiram;
  let fixture: ComponentFixture<DoctorAbhiram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAbhiram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAbhiram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
