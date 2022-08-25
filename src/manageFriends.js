const initialState = { friends: [] }

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      return { 
        newFriend: [...friends, {
          name: "Chrome Boi",
          hometown: "NYC",
          id: 1
        }]
      }
    case "friends/remove":
      return {
        friendRemoved: [...friends].filter((friend) => friend.id === action.payload)
      }
    default:
      return state
  }
}
