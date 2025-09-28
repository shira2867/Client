// import { httpGet, httpPost } from './http';

// // אם ה־Node שלך כרגע משתמש ב־/books-list ל־GET
// export const fetchBooks = () => {
//   return httpGet('/books-list')
//     .then(data => {
//       console.log('Books:', data);
//       return data;
//     })
//     .catch(error => {
//       console.error('Error fetching books:', error);
//       throw error;
//     });
// };

// // אם ה־Node שלך הוספת לו route ל־POST ב־/books
// export const addBook = (newBook: { title: string; author: string }) => {
//   return httpPost('/books', newBook)
//     .then(data => {
//       console.log('Book added:', data);
//       return data;
//     })
//     .catch(error => {
//       console.error('Error adding book:', error);
//       throw error;
//     });
// };
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
