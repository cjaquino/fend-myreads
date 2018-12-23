import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf';
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // console.log(books);
      this.setState({ books });
    })
  }

  toggleShowSearchPage() {
      this.setState({ showSearchPage: !this.state.showSearchPage })
  }

  render() {
    let currentlyReading = this.state.books.filter((book) => book.shelf === 'currentlyReading');
    let wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead');
    let read = this.state.books.filter((book) => book.shelf === 'read');

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onReturn={() => this.toggleShowSearchPage()} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf books={currentlyReading} heading="Currently Reading" />
                <Bookshelf books={wantToRead} heading="Want to Read" />
                <Bookshelf books={read} heading="Read" />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.toggleShowSearchPage()}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
