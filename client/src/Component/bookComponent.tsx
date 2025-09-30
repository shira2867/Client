
import React, { useEffect, useState } from 'react';
import { fetchBooks, addBook } from '../Service/book';
import { login, logout, register } from '../Service/http';


export interface Book {
  id: number;
  title: string;
  author: string;
}

export function BookComponent() {
  const [books, setBooks] = useState<Book[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loadBooks = async () => {
    try {
      const data = await fetchBooks();
      setBooks(data);
      console.log(data)
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  }

  // const addNewBook = async () => {
  //   try {
  //     const newBook = await addBook({ title: 'From Postman', author: 'Someone' });
  //     setBooks(prev => [...prev, newBook]);
  //   } catch (err) {
  //     console.error('Error adding book:', err);
  //   }

  // };

  const handleLogin = async () => {
    try {
      const token = await login('shira', '1234');
      console.log('נשמר בלוקל סטורג:', token);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };
  const handleRegister = async () => {
    try {
      const res = await register(username, password);
      alert("Registered successfully: " + res.user.username);
    } catch (err) {
      alert("Registration failed: " + (err as any).response?.data?.error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <button onClick={loadBooks}>Load Books</button>
      <button onClick={logout}>LOGOUT</button>
<div>
      <button onClick={handleLogin}>LOGIN</button>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      </div>
      <ul>
        {books.map(b => (
          <li key={b.id}>{b.title} – {b.author}</li>
        ))}
      </ul>
    </div>
  );
}
