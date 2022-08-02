import { FriendsListModel } from 'src/models/friends-list-model';

export interface FriendsListState {
    friendsList: FriendsListModel[];
    friendsListLoaded: boolean;
    friendsListLoading: boolean;
  }
  