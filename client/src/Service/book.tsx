
import axios from 'axios';

export const httpGet = (url: string) => {
  return axios.get(url, { withCredentials: true })
    .then(res => res.data)
    .catch(err => err.response?.data);
};

export const httpPost = (url: string, data: any) => {
  return axios.post(url, data, { withCredentials: true })
    .then(res => res.data)
    .catch(err => err.response?.data);
};

// קריאות ל־Node
export const fetchBooks = () => httpGet('http://localhost:3000/books');
export const addBook = (newBook: { title: string; author: string }) => httpPost('http://localhost:3000/books', newBook);
