import React, { Component } from 'react'
import Book from './book'

export class Shelf extends Component {
    render() {
        return (
            
            
            
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    
                      <Book />
                    
                  </ol>
                </div>
              </div>
              
          
        )
    }
}

export default Shelf
