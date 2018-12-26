import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  static propTypes = {
    onReturn: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  }

  state = {
    query: '',
    inShelf: [],
    results: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // console.log(books)
      this.setState({ inShelf: books });
    })
  }

  updateQuery = (query) => {
    this.setState({ query }, this.doQuery)
  }

  doQuery() {
    if(this.state.query === '' || this.state.query === undefined) {
      return this.setState({ results: [] });
    }
    BooksAPI.search(this.state.query.trim()).then( books => {
      if(books.error) {
          return this.setState({ results: [] });
      }
      else {
          books.forEach(book => {
              let f_books  = this.state.inShelf.filter(t_book => t_book.id ===  book.id);
              if(f_books[0]) {
                  book.shelf = f_books[0].shelf
              }
          });
          return this.setState({ results: books });
      }
     });
  }


  clearQuery = (query) => {
    this.setState({ query: '', books: [] })
  }

  render() {
    const { query } = this.state;

    return (
      <div className="search-books">
      <div className="search-books-bar">
      <Link to='/' className='closeSearchButton'>Close</Link>
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
        {this.state.results.length <= 0 && (
          <span>No books found!</span>
        )}
        {this.state.results.length > 0 && (
          <ol className="books-grid">
            {this.state.results.map((book) => (
              <li key={book.id}>
                <Book book={book} onChangeHandler={this.props.onChangeHandler} />
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
