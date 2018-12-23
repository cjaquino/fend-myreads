import React, { Component } from 'react';
// import BooksAPI from  './BooksAPI'

class Options extends Component {
  onChangeHandler = () => {
    const selectBox = document.getElementById('selectBox')
    console.log(selectBox.options[selectBox.selectedIndex].value);
    console.log(this.props.book)
  }

  render () {
    return (
      <div className="book-shelf-changer">
        <select id="selectBox" onChange={() => this.onChangeHandler()}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Options;
