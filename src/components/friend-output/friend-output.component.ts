import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FriendsListModel } from 'src/models/friends-list-model';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/ngrx/state/app.state';
import { selectFriendsList } from 'src/ngrx/selectors/friends.selectors';

@Component({
  selector: 'fl-friend-output',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './friend-output.component.html',
  styleUrls: ['./friend-output.component.scss']
})
export class FriendOutputComponent {

  displayedColumns: string[] = ['name', 'friends', 'age', 'weight'];

  friendListData$: Observable<FriendsListModel[]>;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.setObservables();
  }

  // These are the public functions for deleting from the list and opening the edit dialog form
  // public openDialog(friend: FriendsListModel) {
  //   this.dialog.open(FriendInputComponent, {data: friend})
  // }

  // public deleteFriend(friendID: number): void{
  //   this.store.dispatch(deleteFriend({friendID}));
  // }

  private setObservables() {
    this.friendListData$ = this.store.select(selectFriendsList);
  }
}
