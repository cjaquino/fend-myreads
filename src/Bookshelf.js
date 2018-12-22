 import React, { Component } from 'react';
 import PropTypes from 'prop-types'
 import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    shelf: PropTypes.object.isRequired
  }

  state = {
    books: []
  }
  componentDidMount() {
    // console.log(this.props.shelf)
    this.setState({ books: this.props.shelf.books})
  }

  render() {
    const shelf = this.props.shelf;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books.map((book) => (
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
