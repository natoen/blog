export default function (state = null, action) {
  switch(action.type) {
    case 'LOADED':
      return action.payload;
    default:
      return state;
  }
}
