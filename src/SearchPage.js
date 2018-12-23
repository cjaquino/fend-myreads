import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  static propTypes = {
    onReturn: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    query = query.trim();
    if(query) {
      BooksAPI.search(query).then((books) => {
        this.setState({ query, books })
      })
    } else {
      this.clearQuery();
    }
  }


  clearQuery = (query) => {
    this.setState({ query: '', books: [] })
  }

  render() {
    const { query } = this.state;

    return (
      <div className="search-books">
      <div className="search-books-bar">
      <button className="close-search" onClick={this.props.onReturn}>Close</button>
      <div className="search-books-input-wrapper">
      {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={(event) => this.updateQuery(event.target.value)}
          value={query}
        />

        </div>
        </div>
        <div className="search-books-results">
        {this.state.books.length <= 0 && (
          <span>No books found!</span>
        )}
        {this.state.books.length > 0 && (
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        )}
        </div>
        </div>
    )
  }
}




export default SearchPage;
