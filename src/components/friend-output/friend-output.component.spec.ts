import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendOutputComponent } from './friend-output.component';
import { StoreModule } from '@ngrx/store';

describe('FriendOutputComponent', () => {
  let component: FriendOutputComponent;
  let fixture: ComponentFixture<FriendOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FriendOutputComponent, StoreModule.forRoot({}), ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a standalone FriendOutputComponent', () => {
    expect(component).toBeTruthy();
  });
});
