import React, { Component } from 'react'
import Shelf from './shelf'
export class Home extends Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <div className="list-books-content">
                <Shelf shelfName ='Currently reading' />
                <Shelf shelfName ='Want to read' />
                <Shelf shelfName ='Read'/>
              </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
    }
}

export default Home
