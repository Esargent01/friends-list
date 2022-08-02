import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import {
  loadFriendsList, 
  loadFriendsListSuccess, 
  loadFriendsListFailure, 
  addFriends, 
  addFriendsSuccess, 
  addFriendsFailure
} from '../actions/friends.actions';
import { FriendsListDataService } from 'src/services/friends-list-data-service';
import { of } from 'rxjs';

@Injectable()
export class FriendsListEffects {
  constructor(
    private actions$: Actions,
    private friendsListDataService: FriendsListDataService,
  ) {}

  loadFriendsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFriendsList),
      switchMap(() => 
        this.friendsListDataService.getFriendsList().pipe(
            map((friendsList) => {
                return loadFriendsListSuccess({friendsList})
            }
            ),
            catchError((error) => of(loadFriendsListFailure({ error })))
        )
      )
    )
  );

  addFriends$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFriends),
      switchMap(({friendsList}) => 
        this.friendsListDataService.addFriend(friendsList).pipe(
            map(() => 
            addFriendsSuccess()
            ),
            catchError((error) => of(addFriendsFailure({ error })))
        )
      )
    )
  );


  //These are the effects for the Edit and Delete actions
  // editFriends$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(editFriend),
  //     switchMap(({friendsList, friendID}) => 
  //       this.friendsListDataService.editFriend(friendsList, friendID).pipe(
  //           map((data) => {
  //             console.log(data.data?.updateFriend);
  //             return editFriendSuccess({friendsList: data.data?.updateFriend})
  //           }
  //           ),
  //           catchError((error) => of(editFriendFailure({ error })))
  //       )
  //     )
  //   )
  // );

  // deleteFriends$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteFriend),
  //     switchMap(({friendID}) => 
  //       this.friendsListDataService.deleteFriend(friendID).pipe(
  //           map((friendsList) => 
  //           deleteFriendSuccess({friendsList})
  //           ),
  //           catchError((error) => of(deleteFriendFailure({ error })))
  //       )
  //     )
  //   )
  // );
}
