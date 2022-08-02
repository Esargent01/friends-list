
import { FriendsListState } from '../state/friends.state';
import { selectFriendsList } from './friends.selectors';

describe('Friend List Selector', () => {
    it('selectFriendsList: should return friendsList', () => {
        const expectedFriendList = [
            {
                id: '0',
                friends:["fred"],
                name: "Greg",
                age:22,
                weight:200
            }
        ];
        const FriendsListState = {
            friendsList: expectedFriendList,
            friendsListLoaded: true,
            friendsListLoading: false,
          } as FriendsListState;
      expect(selectFriendsList.projector(FriendsListState))
        .toEqual(expectedFriendList); 
    });
});