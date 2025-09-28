
import React, { useEffect, useState } from 'react';
import { fetchBooks, addBook } from '../Service/book';

export interface Book {
  id: number;
  title: string;
  author: string;
}

export function BookComponent() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then(setBooks).catch(console.error);
  }, []);

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
      <button onClick={addNewBook}>Add Book</button>
      <ul>
        {books.map(b => (
          <li key={b.id}>{b.title} – {b.author}</li>
        ))}
      </ul>
    </div>
  );
}
