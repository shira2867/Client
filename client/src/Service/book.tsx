
import axios from 'axios';

import {httpGet,httpPost} from './http'

export const fetchBooks = () => httpGet('/books');
export const addBook = (newBook: { title: string; author: string }) => httpPost('/books', newBook);
