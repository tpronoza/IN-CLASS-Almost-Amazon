import { createAuthor, updateAuthor } from '../../api/authorData';
import { createBook, updateBook } from '../../api/bookData';
import { showAuthors } from '../components/pages/authors';
import { showBooks } from '../components/pages/books';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      // console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id').value,
        uid
      };
      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id').value,
        firebaseKey
      };
      // updateBook(bookObject).then(showBooks);
      updateBook(firebaseKey, bookObject).then((booksArray) => showBooks(booksArray));
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      // console.warn('CLICKED SUBMIT AUTHOR');
      const authorObject = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        favorite: document.querySelector('#favorite').checked,
      };
      createAuthor(authorObject).then((authorsArray) => showAuthors(authorsArray));
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
      };
      updateAuthor(firebaseKey, authorObject).then((authorsArray) => showAuthors(authorsArray));
    }
  });
};

export default formEvents;
