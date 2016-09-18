export default function imageLoader(loaded) {
  return {
    type: 'LOADED',
    payload: loaded,
  };
}
