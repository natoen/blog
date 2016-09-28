import axios from 'axios';


export function getPosts() {
  const data = axios.get('/api/posts');
  return {
    type: 'GET_ALL',
    payload: data,
  };
}

export function getPost(postUrlPath) {
  const data = axios.get(`/api/post/${postUrlPath}`);
  return {
    type: 'GET_POST',
    payload: data,
  };
}

export function resetPost() {
  return {
    type: 'RESET_POST',
    payload: null,
  };
}
