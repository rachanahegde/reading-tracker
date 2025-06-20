// Store & update books, currentlyReading
// Handle addBook, removeBook, and future searchBooks

import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);

  // Load books from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userData"));
    if (saved?.books) setBooks(saved.books);
    if (saved?.currentlyReading) setCurrentlyReading(saved.currentlyReading);
    if (saved?.finishedBooks) setFinishedBooks(saved.finishedBooks);
  }, []);

  const saveToStorage = (newData) => {
    const saved = JSON.parse(localStorage.getItem("userData")) || {};
    const updated = { ...saved, ...newData };
    localStorage.setItem("userData", JSON.stringify(updated));
  };

  // Add book to main library
  const addBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    saveToStorage({ books: updatedBooks });
  };

  // Remove book from main library
  const removeBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    saveToStorage({ books: updatedBooks });
  };

  // Add book to currently reading
  const addToCurrentlyReading = (book) => {
    const updated = [...currentlyReading, book];
    setCurrentlyReading(updated);
    saveToStorage({ currentlyReading: updated });
  };

  // Remove from currently reading
  const removeFromCurrentlyReading = (bookId) => {
    const updated = currentlyReading.filter((book) => book.id !== bookId);
    setCurrentlyReading(updated);
    saveToStorage({ currentlyReading: updated });
  };

  // Call when user finishes a book
  const markBookAsFinished = (bookId) => {
    // TODO update XP or trigger evolution here - i.e. call addXP(points)
  };

  //   TODO Add the searchBooks function with async await and API call

  return (
    <BooksContext.Provider
      value={{
        books,
        currentlyReading,
        addBook,
        removeBook,
        addToCurrentlyReading,
        removeFromCurrentlyReading,
        markBookAsFinished,
        finishedBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
