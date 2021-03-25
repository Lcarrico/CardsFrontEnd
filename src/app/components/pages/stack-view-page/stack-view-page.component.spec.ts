import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackViewPageComponent } from './stack-view-page.component';

describe('StackViewPageComponent', () => {
  let component: StackViewPageComponent;
  let fixture: ComponentFixture<StackViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
