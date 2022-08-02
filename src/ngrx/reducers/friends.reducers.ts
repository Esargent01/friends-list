import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { loadFriendsList, loadFriendsListSuccess, loadFriendsListFailure } from '../actions/friends.actions';
import { FriendsListState } from '../state/friends.state';
import { AppState } from '../state/app.state';

export const initialState: FriendsListState = {
    friendsList: [],
    friendsListLoaded: false,
    friendsListLoading: false,
};

const reducer = createReducer(
  initialState,
  on(loadFriendsList, (state) => {
    return {
      ...state,
      friendsListLoaded: false,
      friendsListLoading: true,
    };
  }),
  on(loadFriendsListSuccess, (state, {friendsList}) => {
      return {
      ...state,
      friendsList,
      friendsListLoaded: true,
      friendsListLoading: false,
      };
    }
  ),
  on(loadFriendsListFailure, (state) => {
    return {
      ...state,
      friendsListLoaded: true,
      friendsListLoading: false,
    };
  })

  // These are reducers for the added functionality of editing and deleting "Friends" from the table
  // on(editFriend, (state) => {
  //   return {
  //     ...state,
  //     friendsListLoaded: true,
  //     friendsListLoading: false,
  //   };
  // }),
  // on(editFriendSuccess, (state, {friendsList}) => {
  //   return {
  //     ...state,
  //     friendsListLoaded: true,
  //     friendsListLoading: false,
  //   };
  // }),
  // on(editFriendFailure, (state) => {
  //   return {
  //     ...state,
  //     friendsListLoaded: true,
  //     friendsListLoading: false,
  //   };
  // }),
  // on(deleteFriend, (state) => {
  //   return {
  //     ...state,
  //     friendsListLoaded: true,
  //     friendsListLoading: false,
  //   };
  // }),
  // on(deleteFriendSuccess, (state, {friendsList}) => {
  //   return {
  //     ...state,
  //     friendsListLoaded: true,
  //     friendsListLoading: false,
  //   };
  // }),
  // on(deleteFriendFailure, (state) => {
  //   return {
  //     ...state,
  //     friendsListLoaded: true,
  //     friendsListLoading: false,
  //   };
  // }),
);

export function friendsListReducer(
  state: FriendsListState | undefined,
  action: Action
): any {
  return reducer(state, action);
}

export const getFriendsListStateState = createFeatureSelector<
  AppState,
  FriendsListState
>('friendsList');

export const getFriendsList = (state: FriendsListState) => {return state.friendsList};

export const getFriendsListLoaded = (state: FriendsListState) =>
  {return state.friendsListLoaded};

export const getFriendsListLoading = (state: FriendsListState) =>
  {return state.friendsListLoading};
