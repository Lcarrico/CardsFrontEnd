import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareStackDialogComponent } from './share-stack-dialog.component';

describe('ShareStackDialogComponent', () => {
  let component: ShareStackDialogComponent;
  let fixture: ComponentFixture<ShareStackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareStackDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareStackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
