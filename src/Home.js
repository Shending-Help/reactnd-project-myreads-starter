import React, { Component } from "react";
import { getAll, update } from "./BooksAPI";
import Shelf from "./shelf";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = {
    onShelf: [],
  };
  async componentDidMount() {
    try {
      const books = await getAll();
      console.log(books);
      this.setState({ onShelf: books });
    } catch {
      console.log("error");
    }
  }

  updateShelf = (book, shelf) => {
    if (this.state.onShelf) {
      update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState((state) => ({
          books: state.onShelf.filter((b) => b.id !== book.id).concat([book]),
        }));
      });
    }
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelfCode="currentlyReading"
            shelfName="Currently Reading"
            booksOnShelf={this.state.onShelf}
            updateShelf={this.updateShelf}
          />
          <Shelf
            shelfName="Want To Read"
            booksOnShelf={this.state.onShelf}
            shelfCode="wantToRead"
            updateShelf={this.updateShelf}
          />
          <Shelf
            shelfName="Read"
            booksOnShelf={this.state.onShelf}
            updateShelf={this.updateShelf}
            shelfCode="read"
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
