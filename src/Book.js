import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  }

  render() {
    const {title, authors} = this.props.book;
    let thumb = '';
    if(this.props.book.imageLinks) {
      thumb = this.props.book.imageLinks.thumbnail;
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumb})` }}></div>
          <div className="book-shelf-changer">
            <select id={this.props.book.id} value={this.props.book.shelf || "none"} onChange={(e) => this.props.onChangeHandler(this.props.book,e.target.value)}>
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

export default Book;
