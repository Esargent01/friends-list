import { createSelector } from '@ngrx/store';
import { getFriendsList, getFriendsListStateState } from '../reducers/friends.reducers';

export const selectFriendsList = createSelector(
    getFriendsListStateState,
    getFriendsList
);
