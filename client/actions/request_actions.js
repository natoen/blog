import axios from 'axios';


export function getPosts() {
  const data = axios.get('/api/posts');
  return {
    type: 'GET_ALL',
    payload: data,
  };
}

export function getPost(id) {
  const data = axios.get(`/api/post/${id}`);
  return {
    type: 'GET_POST',
    payload: data,
  };
}
