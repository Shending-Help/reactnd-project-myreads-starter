import React, { Component } from "react";
import { get, getAll } from "./BooksAPI";
import Shelf from "./shelf";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = {
    onShelf: [],
  };
  async componentDidMount() {
    try {
      const books = await getAll();
      this.setState.onShelf = books;
    } catch {
      console.log("error");
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf shelfName="Currently reading" />
          <Shelf shelfName="Want to read" />
          <Shelf shelfName="Read" />
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
