const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' }
];

app.get('/books', (req, res) => res.json(books));
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const id = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  if (!title || !author) return res.status(400).json({ message: 'title and author required' });
  const book = { id, title, author };
  books.push(book);
  res.status(201).json(book);
});
app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Book not found' });
  const { title, author } = req.body;
  books[idx] = { ...books[idx], ...(title && { title }), ...(author && { author }) };
  res.json(books[idx]);
});
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  books = books.filter(b => b.id !== id);
  res.status(200).json({message:'This book is deleted'});
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));