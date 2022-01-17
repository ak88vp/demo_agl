import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ak88Component } from './ak88.component';

describe('Ak88Component', () => {
  let component: Ak88Component;
  let fixture: ComponentFixture<Ak88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ak88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ak88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
