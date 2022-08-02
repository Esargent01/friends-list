import { gql } from "apollo-angular";

export const GET_FriendsList = gql`
query{
  allFriends{
    id,
    name,
    friends,
    age,
    weight
  }
}
`
export const ADD_Friend = gql`
mutation($name:String!, $age:Int!, $weight: Int!, $friends: JSON!){
  createFriend(name:$name, age: $age, weight: $weight, friends: $friends){
    id,
    age,
    name,
    friends,
    weight
  }
}
`
// GraphQL mutations for updating and removing friends from the list
// export const EDIT_Friend = gql`
// mutation($id:ID!, $name:String!, $age:Int!, $weight: Int!, $friends: JSON!){
//   updateFriend(id: $id, name: $name, age: $age, weight: $weight, friends: $friends){
//     id,
//     weight,
//     name,
//     age,
//     friends
//   }
// }
// `
// export const REMOVE_Friend = gql`
// mutation($id:ID!){
//   removeFriend(id:$id){
//     id
//   }
// }
// `