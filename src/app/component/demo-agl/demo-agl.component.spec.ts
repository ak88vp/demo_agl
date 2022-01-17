import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAglComponent } from './demo-agl.component';

describe('DemoAglComponent', () => {
  let component: DemoAglComponent;
  let fixture: ComponentFixture<DemoAglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAglComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
