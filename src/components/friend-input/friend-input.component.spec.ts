import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { FriendInputComponent } from './friend-input.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FriendInputComponent', () => {
  let component: FriendInputComponent;
  let fixture: ComponentFixture<FriendInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FriendInputComponent, StoreModule.forRoot({}), MatDialogModule, BrowserAnimationsModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a standalone FriendInputComponent', () => {
    expect(component).toBeTruthy();
  });
});
