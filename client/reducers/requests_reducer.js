export default function (state = { posts: [], post: null }, action) {
  switch(action.type) {
    case 'GET_ALL':
      return Object.assign({}, state, { posts: action.payload.data });
    case 'GET_POST':
      return Object.assign({}, state, { post: action.payload.data });
    default:
      return state;
  }
}
