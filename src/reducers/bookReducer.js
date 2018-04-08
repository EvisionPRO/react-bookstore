export default function bookReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state,
        Object.assign({}, action.book)
      ];
      default:
        return state;
  }
}
