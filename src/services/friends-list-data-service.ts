import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_FriendsList, ADD_Friend } from 'src/queries/friends-list/gql/friends-list-query';
import { FriendsListModel } from 'src/models/friends-list-model';

@Injectable({
  providedIn: 'root',
})
export class FriendsListDataService {
  constructor(private apollo: Apollo) {}

  public getFriendsList(): Observable<FriendsListModel[]> {
    return this.apollo
    .watchQuery<any>({ query: GET_FriendsList, errorPolicy: 'all' })
    .valueChanges.pipe(map(result => result.data.allFriends));
  }

  public addFriend(friendList: FriendsListModel): Observable<MutationResult<{ createFriend: FriendsListModel; }>> {
    return this.apollo
      .mutate<{ createFriend: FriendsListModel }>({
        mutation: ADD_Friend,
        variables: {
          name: friendList.name,
          age: friendList.age,
          weight: friendList.weight,
          friends: friendList.friends,
        },
        update: (store, { data }) => {
          if (data?.createFriend) {
            var allData = store.readQuery<{ allFriends: FriendsListModel[] }>({
              query: GET_FriendsList,
            });

            if (allData && allData?.allFriends?.length > 0) {
              var newData: FriendsListModel[] = [...allData.allFriends];
              newData?.unshift(data.createFriend);

              store.writeQuery<{ allFriends: FriendsListModel[] }>({
                query: GET_FriendsList,
                data: { allFriends: newData },
              });
            }
          }
        }
      })
  }

  // These are the GraphQL mutations for editing and deleting "Friends" from the database.
  // public editFriend(friendList: FriendsListModel, friendID: string | undefined): Observable<MutationResult<{ updateFriend: FriendsListModel; }>> {
  //   return this.apollo
  //     .mutate<{ updateFriend: FriendsListModel }>({
  //       mutation: EDIT_Friend,
  //       variables: {
  //         id: friendID,
  //         name: friendList.name,
  //         age: friendList.age,
  //         weight: friendList.weight,
  //         friends: friendList.friends,
  //       },
  //       update: (store, { data }) => {
  //         if (data?.updateFriend) {
  //           var allData = store.readQuery<{ allFriends: FriendsListModel[] }>({
  //             query: GET_FriendsList,
  //           });

  //           if (allData && allData?.allFriends?.length > 0) {
  //             var newData: FriendsListModel[] = [...allData.allFriends];
  //             newData?.unshift(data.updateFriend);

  //             store.writeQuery<{ allFriends: FriendsListModel[] }>({
  //               query: GET_FriendsList,
  //               data: { allFriends: newData },
  //             });
  //           }
  //         }
  //       }
  //     })
  // }

  // public deleteFriend(friendID: number): Observable<MutationResult<{ removeFriend: FriendsListModel; }>> {
  //   return this.apollo
  //   .mutate<{ removeFriend: FriendsListModel }>({
  //     mutation: REMOVE_Friend,
  //     variables: {
  //       id: friendID,
  //     },
  //     update: (store, { data }) => {
  //       if (data?.removeFriend) {
  //         var allData = store.readQuery<{ allFriends: FriendsListModel[] }>({
  //           query: GET_FriendsList,
  //         });

  //         if (allData && allData?.allFriends?.length > 0) {
  //           var newData: FriendsListModel[] = [...allData.allFriends];
  //           newData = newData.filter((_) => _.id == data.removeFriend.id);

  //           store.writeQuery<{ allFriends: FriendsListModel[] }>({
  //             query: GET_FriendsList,
  //             data: { allFriends: newData },
  //           });
  //         }
  //       }
  //     }
  //   })
  // }
} 
