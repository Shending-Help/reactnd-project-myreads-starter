import React from "react";
import { get, getAll, update } from "./BooksAPI";
import "./App.css";
import Home from "./Home";
import Search from "./Search";
import { Switch, Route } from "react-router-dom";

class BooksApp extends React.Component {
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
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              updateShelf={this.updateShelf}
              onShelf={this.state.onShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Home updateShelf={this.updateShelf} onShelf={this.state.onShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
