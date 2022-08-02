import { createAction, props } from '@ngrx/store';
import { FriendsListModel } from 'src/models/friends-list-model';

export const loadFriendsList = createAction(
   '[Friends List] Load Friends List'
);

export const loadFriendsListSuccess = createAction(
   '[Friends List] Load Friends List Success',
   props<{ friendsList: FriendsListModel[] }>()
);
  
export const loadFriendsListFailure = createAction(
  '[Friends List] Load Friends List Failure',
   props<{ error: any }>()
);

export const addFriends = createAction(
  '[Friends List] Add Friends To The List',
  props<{ friendsList: any }>()
);

export const addFriendsSuccess = createAction(
  '[Friends List] Add Friends To The List Success'
);

export const addFriendsFailure = createAction(
  '[Friends List] Add Friends To The List Failure',
  props<{ error: any }>()
);

// These are the respective actions for editing and deleting friends from the table.
// export const editFriend = createAction(
//   '[Friends List] Edit Friends',
//   props<{ friendsList: FriendsListModel, friendID: string | undefined }>()
// );

// export const editFriendSuccess = createAction(
//   '[Friends List] Edit Friends Success',
//   props<{ friendsList: FriendsListModel }>()
// );

// export const editFriendFailure = createAction(
//   '[Friends List] Edit Friends Failure',
//   props<{ error: any }>()
// );

// export const deleteFriend = createAction(
//   '[Friends List] Delete Friends',
//   props<{ friendID: number }>()
// );

// export const deleteFriendSuccess = createAction(
//   '[Friends List] Delete Friends Success',
//   props<{ friendsList: FriendsListModel }>()
// );

// export const deleteFriendFailure = createAction(
//   '[Friends List] Delete Friends Failure',
//   props<{ error: any }>()
// );