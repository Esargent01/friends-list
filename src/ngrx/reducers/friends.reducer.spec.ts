import * as fromReducer from './friends.reducers';
import { loadFriendsListSuccess, addFriendsSuccess } from '../actions/friends.actions';

describe('FriendsList Reducer', () => {
    describe('Initialization', () => {
      it('should return the default state', () => {
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.friendsListReducer(initialState, action);
   
        expect(state).toBe(initialState);
      });
    });
   
    describe('return the friends list', () => {
      it('should retrieve all friends and update the state', () => {
        const { initialState } = fromReducer;
        const expectedFriendList = [
            {
                id: '0',
                friends:["fred"],
                name: "Greg",
                age:22,
                weight:200
            }
        ];
        const expectedNewState = { friendsList: [ Object({ id: '0', friends: [ 'fred' ], name: 'Greg', age: 22, weight: 200 }) ], friendsListLoaded: true, friendsListLoading: false }
        const action = loadFriendsListSuccess({friendsList: expectedFriendList});
        const state = fromReducer.friendsListReducer(initialState, action);
   
        expect(state).toEqual(expectedNewState);
        expect(state).not.toBe(initialState);
      });
    });
  });
