import * as friendActions from './friends.actions';

describe('loadFriendsList', () => {
    it('should create the loadFriendsList action', () => {
        const expectedAction = friendActions.loadFriendsList();

        expect(expectedAction).toEqual({ type: '[Friends List] Load Friends List'});
    });
});

describe('loadFriendsListSuccess', () => {
    it('should create the loadFriendsListSuccess action', () => {
        const friendsList = [
            {
              id: '0',
              friends:["fred"],
              name: "Greg",
              age:22,
              weight:200
            }
        ]
        const expectedAction = friendActions.loadFriendsListSuccess({friendsList});

        expect(expectedAction).toEqual({ type: '[Friends List] Load Friends List Success', friendsList});
    });
});

describe('loadFriendsListFailure', () => {
    it('should create the loadFriendsListFailure action', () => {
        const error = undefined;
        const expectedAction = friendActions.loadFriendsListFailure({error});

        expect(expectedAction).toEqual({ type: '[Friends List] Load Friends List Failure', error});
    });
});

describe('addFriends', () => {
    it('should create the addFriends action', () => {
        const friendsList = [
            {
              id: '0',
              friends:["fred"],
              name: "Greg",
              age:22,
              weight:200
            }
        ]
        const expectedAction = friendActions.addFriends({friendsList});

        expect(expectedAction).toEqual({ type: '[Friends List] Add Friends To The List', friendsList});
    });
});

describe('addFriendsSuccess', () => {
    it('should create the addFriendsSuccess action', () => {
        const expectedAction = friendActions.addFriendsSuccess();

        expect(expectedAction).toEqual({ type: '[Friends List] Add Friends To The List Success'});
    });
});

describe('addFriendsFailure', () => {
    it('should create the addFriendsFailure action', () => {
        const error = undefined;
        const expectedAction = friendActions.addFriendsFailure({error});

        expect(expectedAction).toEqual({ type: '[Friends List] Add Friends To The List Failure', error});
    });
});