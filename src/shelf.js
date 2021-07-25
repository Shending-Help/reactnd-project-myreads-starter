import React, { Component } from "react";
import Book from "./book";
import PropTypes from "prop-types";

export class Shelf extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    shelfCode: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,
  };

  render() {
    const shelfAssigner = this.props.booksOnShelf.filter(
      (book) => book.shelf === this.props.shelfCode
    );
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfAssigner.map((b) => (
              <li key={b.id}>
                <Book
                  book={b}
                  updateShelf={this.props.updateShelf}
                  IsResult={false}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
