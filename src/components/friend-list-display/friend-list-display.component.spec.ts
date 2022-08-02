import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListDisplayComponent } from './friend-list-display.component';
import { StoreModule } from '@ngrx/store';

describe('FriendListDisplayComponent', () => {
  let component: FriendListDisplayComponent;
  let fixture: ComponentFixture<FriendListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FriendListDisplayComponent, StoreModule.forRoot({}), ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a standalone FriendListDisplayComponent', () => {
    expect(component).toBeTruthy();
  });
});
