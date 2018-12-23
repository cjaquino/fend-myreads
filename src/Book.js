import React, { Component } from 'react';
import Options from './Options';
import PropTypes from 'prop-types';

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
    shelfBooks: PropTypes.object.isRequired
  }

  render() {
    const {title, authors} = this.props.shelfBooks;
    const thumb = this.props.shelfBooks.imageLinks.thumbnail;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumb})` }}></div>
          <Options book={this.props.shelfBooks} />
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
