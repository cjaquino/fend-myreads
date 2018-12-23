 import React, { Component } from 'react';
 import PropTypes from 'prop-types'
 import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    heading: PropTypes.string.isRequired
  }

  render() {
    const books = this.props.books;
    const heading = this.props.heading
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.title}>
                <Book shelfBooks={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


 export default Bookshelf;
