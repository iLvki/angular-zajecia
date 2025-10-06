import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U1Component } from './u1.component';

describe('U1Component', () => {
  let component: U1Component;
  let fixture: ComponentFixture<U1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [U1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(U1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
