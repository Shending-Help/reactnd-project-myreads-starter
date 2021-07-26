import React, { Component } from "react";
import updateShelf from "./Home";
import PropTypes from "prop-types";

export class Book extends Component {
  state;
  setBackgroundImage(book) {
    if (book.imageLinks) {
      return `${book.imageLinks.thumbnail}`;
    } else {
      return `https://images.techhive.com/images/article/2016/04/error-thinkstock-100655502-large.jpg`;
    }
  }

  checkshelf(b) {
    const book = this.props.onShelf.find((book) => book.id === b.id);
    if (book) {
      return book.shelf;
    } else {
      return "none";
    }
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
  };

  render() {
    const newShelf = (shelf) => {
      this.props.updateShelf(this.props.book, shelf);
      this.setState([]);
    };

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.setBackgroundImage(
                this.props.book
              )})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={
                this.props.IsResult
                  ? this.checkshelf(this.props.book)
                  : this.props.book.shelf
              }
              onChange={(e) => newShelf(e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
