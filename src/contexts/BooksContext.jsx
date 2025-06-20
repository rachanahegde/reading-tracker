// Store & update books, currentlyReading
// Handle addBook, removeBook, and future searchBooks

import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);

  // Load books from localStorage on mount and update the state of the books in the app
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userData"));
    if (saved?.books) setBooks(saved.books);
    if (saved?.wantToRead) setWantToRead(saved.wantToRead);
    if (saved?.currentlyReading) setCurrentlyReading(saved.currentlyReading);
    if (saved?.finishedBooks) setFinishedBooks(saved.finishedBooks);
  }, []);

  const saveToStorage = (newData) => {
    const saved = JSON.parse(localStorage.getItem("userData")) || {};
    const updated = { ...saved, ...newData };
    localStorage.setItem("userData", JSON.stringify(updated));
  };

  // 🔁 Reusable helper to update a book list (state + localStorage)
  const updateList = (listName, updaterFn) => {
    const listStateMap = {
      books: [books, setBooks],
      wantToRead: [wantToRead, setWantToRead],
      currentlyReading: [currentlyReading, setCurrentlyReading],
      finishedBooks: [finishedBooks, setFinishedBooks],
    };

    const [currentList, setList] = listStateMap[listName];
    const updatedList = updaterFn(currentList);

    setList(updatedList);
    saveToStorage({ [listName]: updatedList });
  };

  // ✅ Public actions (clean, reusable)
  const addBook = (book) => updateList("books", (list) => [...list, book]);
  const removeBook = (bookId) =>
    updateList("books", (list) => list.filter((b) => b.id !== bookId));

  const addToWantToRead = (book) =>
    updateList("wantToRead", (list) => [...list, book]);
  const removeFromWantToRead = (bookId) =>
    updateList("wantToRead", (list) => list.filter((b) => b.id !== bookId));

  const addToCurrentlyReading = (book) =>
    updateList("currentlyReading", (list) => [...list, book]);
  const removeFromCurrentlyReading = (bookId) =>
    updateList("currentlyReading", (list) =>
      list.filter((b) => b.id !== bookId)
    );

  const markBookAsFinished = (book) => {
    if (!book?.id)
      return console.warn("Invalid book passed to markBookAsFinished:", book);

    const isAlreadyFinished = finishedBooks.some((b) => b.id === book.id);
    if (isAlreadyFinished) return;

    // Update all three relevant lists
    const updatedFinished = [...finishedBooks, book];
    const updatedCurrent = currentlyReading.filter((b) => b.id !== book.id);
    const updatedWant = wantToRead.filter((b) => b.id !== book.id);

    setFinishedBooks(updatedFinished);
    setCurrentlyReading(updatedCurrent);
    setWantToRead(updatedWant);

    saveToStorage({
      finishedBooks: updatedFinished,
      currentlyReading: updatedCurrent,
      wantToRead: updatedWant,
    });

    // Hook in XP logic here if needed
  };

  //   TODO Add the searchBooks function with async await and API call

  return (
    <BooksContext.Provider
      value={{
        books,
        wantToRead,
        currentlyReading,
        finishedBooks,
        addBook,
        removeBook,
        addToWantToRead,
        removeFromWantToRead,
        addToCurrentlyReading,
        removeFromCurrentlyReading,
        markBookAsFinished,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
