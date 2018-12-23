import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from  './BooksAPI';

// Book = {
//   title: '',
//   authors: ['',''],
//   imageLinks: {
//     smallThumbnail: '',
//     thumbnail: ''
//   }
// }


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  onChangeHandler = () => {
    let book = this.props.book;
    let selectBox = document.getElementById(book.id);
    let shelf = selectBox.options[selectBox.selectedIndex].value;
    BooksAPI.update(book, shelf).then((book) => console.log(book));
  }

  render() {
    const {title, authors} = this.props.book;
    const thumb = this.props.book.imageLinks.thumbnail;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumb})` }}></div>
          <div className="book-shelf-changer">
            <select id={this.props.book.id} value={this.props.book.shelf} onChange={() => this.onChangeHandler()}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors && authors.map((author, idx) => (
          <div key={idx} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}
// <Options book={this.props.shelfBooks} />

export default Book;
