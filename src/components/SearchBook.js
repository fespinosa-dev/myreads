import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBook extends Component {

    state = { booksFound: [] }

    handleChange = (event) => {
        this.performSearch(event.target.value);
    }

    performSearch(query){
        console.log(query)
        BooksAPI.search(query)
            .then((searchResult) => {
                if (searchResult instanceof Array) {
                    searchResult.map((book)=> book.shelf = 'none'); 
                    this.setState({ booksFound: searchResult });
                    
                }else{
                    this.setState({ booksFound: [] });
                }
            }).catch((err) => console.log('Error searching books', err));
    }


    // sync up books states of this page with the main one
    syncBookShelfStates(booksFound){
        let myBooks = this.props.myBooks;
        for (let index = 0; index < myBooks.length; index++) {
            const myBook = myBooks[index];

            let bookFound = booksFound.find((book) => book.id === myBook.id);

            if (bookFound !== undefined) {
                bookFound.shelf = myBook.shelf;
            }
        }
    }


    render() {
        return (
            <form >
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" href="/" >Close</a>
                        <div className="search-books-input-wrapper">
                            <input onChange={this.handleChange} type="text" placeholder="Search by title or author" />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.booksFound ? this.state.booksFound.map(book => 
                             <Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf} />
                        ): ''}
                        </ol>
                    </div>
                </div>
            </form>


        )
    }
}

SearchBook.propTypes = {
    myBooks : PropTypes.array,
    onChangeShelf : PropTypes.func
}

export default SearchBook