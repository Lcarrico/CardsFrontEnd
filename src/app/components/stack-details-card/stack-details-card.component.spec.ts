import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDetailsCardComponent } from './stack-details-card.component';

describe('StackDetailsCardComponent', () => {
  let component: StackDetailsCardComponent;
  let fixture: ComponentFixture<StackDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
