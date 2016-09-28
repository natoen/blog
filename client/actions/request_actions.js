import axios from 'axios';


export function getPosts() {
  const data = axios.get('/api/posts');
  return {
    type: 'GET_ALL',
    payload: data,
  };
}

export function getPost(title) {
  const data = axios.get(`/api/post/${title}`);
  return {
    type: 'GET_POST',
    payload: data,
  };
}
