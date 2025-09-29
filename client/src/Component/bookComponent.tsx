
import React, { useEffect, useState } from 'react';
import { fetchBooks,addBook } from '../Service/book';

export interface Book {
  id: number;
  title: string;
  author: string;
}

export function BookComponent() {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    try {
      const data = await fetchBooks();
      setBooks(data);
      console.log(data)
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  }

  const addNewBook = async () => {
    try {
      const newBook = await addBook({ title: 'From Postman', author: 'Someone' });
      setBooks(prev => [...prev, newBook]);
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <button onClick={loadBooks}>Load Books</button>

      <button onClick={addNewBook}>Add Book</button>
      <ul>
        {books.map(b => (
          <li key={b.id}>{b.title} – {b.author}</li>
        ))}
      </ul>
    </div>
  );
}
