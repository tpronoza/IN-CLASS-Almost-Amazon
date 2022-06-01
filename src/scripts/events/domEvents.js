import { deleteBook, getSingleBook } from '../../api/bookData';
import { viewBookDetails, viewAuthorDetails, deleteAuthorBooks } from '../../api/mergedData';
import viewBook from '../components/pages/viewBook';
import { showBooks } from '../components/pages/books';
import addBookForm from '../components/forms/addBookForm';
import { showAuthors } from '../components/pages/authors';
import { getSingleAuthor } from '../../api/authorData';
import addAuthorForm from '../components/forms/addAuthorForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then((booksArray) => showBooks(booksArray));
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // 1. get the book
      // 2. pass book oblect to the book formEvents
      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      // console.warn('VIEW BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, bookFirebaseKey] = e.target.id.split('--');

      viewBookDetails(bookFirebaseKey).then((bookAuthorObject) => viewBook(bookAuthorObject));
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        deleteAuthorBooks(firebaseKey).then(showAuthors);
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      // console.warn('ADD AUTHOR');
      addAuthorForm();
    }

    // Click event for viewing author details and their books
    if (e.target.id.includes('view-author-btn')) {
      const [, authorFirebaseKey] = e.target.id.split('--');
      viewAuthorDetails(authorFirebaseKey).then((authorBooksObject) => viewBook(authorBooksObject));
    }

    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleAuthor(firebaseKey).then((authorObj) => {
        addAuthorForm(authorObj);
      });
    }
  });
};

export default domEvents;
