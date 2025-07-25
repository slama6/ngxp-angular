import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colaboration } from './colaboration';

describe('Colaboration', () => {
  let component: Colaboration;
  let fixture: ComponentFixture<Colaboration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colaboration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colaboration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
