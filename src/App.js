import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

// Components
import Container from "./components/Reusuable/Container";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "React Coding",
      bookAuthor: "Eric Holdridge",
      bookISBN: "12345",
      bookId: uuidv4(),
    },
  ]);

  // Add a book
  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookISBN: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setISBN(book.bookISBN);

    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookISBN: isbn }
          : book
      )
    );
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setISBN("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentBookId(null);
    console.log(currentBookId);
    !currentBookId ? addBook() : updateBook();
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const cancelEdit = () => {
    clearInputs();
    setCurrentBookId(null);
  };

  return (
    <div className="App">
      <Container>
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setISBN={setISBN}
          currentBookId={currentBookId}
          setCurrentBookId={setCurrentBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table
          books={books}
          handleRemoveBook={handleRemoveBook}
          editBook={editBook}
        />
      </Container>
    </div>
  );
};

export default App;
