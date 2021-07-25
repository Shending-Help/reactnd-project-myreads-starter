import React, { Component } from "react";
import { search } from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./book";
import Shelf from "./shelf";
import PropTypes from "prop-types";
import { update } from "./BooksAPI";

export class Search extends Component {
  state = {
    results: [],
    queries: "",
  };

  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
  };

  setQuery = (query) => {
    this.setState({ queries: query });
    if (query === "") {
      this.setState({ results: [] });
    }
    if (query) {
      search(query).then((data) => {
        if (data.error) {
          this.setState({ results: [] });
        } else {
          data
            ? this.setState({ results: data })
            : this.setState({ results: [] });
          data ? console.log(data) : this.setState({ results: [] });
        }
      });
    } else {
      this.setState({ results: [] });
    }
  };
  /* updateShelf = (book, shelf) => {
    if (this.state.results) {
      update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState((state) => ({
          books: state.results.filter((b) => b.id !== book.id).concat([book]),
        }));
      });
    }
  };*/

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
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
              onChange={(e) => this.setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onShelf={this.props.onShelf}
                  updateShelf={this.props.updateShelf}
                  IsResult={true}
                  book={book}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
