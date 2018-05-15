import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBook extends Component {

    state = { query: '' }
    state = { booksFound: [] }

    handleChange = (event) => {
        this.setState({ query: event.target.value });
    }

    handleSubmit = (event) => {
        BooksAPI.search(this.state.query)
            .then((searchResult) => {
                if (searchResult instanceof Array) {

                    let mybooks = this.props.mybooks;

                    for (let index = 0; index < mybooks.length; index++) {
                        const myBook = mybooks[index];

                        let myBookFound = searchResult.find((book)=>{
                            return book.id === myBook.id;
                        });

                        if(myBookFound !== undefined){
                            myBookFound.shelf = myBook.shelf;
                        }
                    }
                    this.setState({ booksFound: searchResult });
                }
            }).catch((err) => {
                console.log('Error searching books', err);
            });
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" href="/" >Close</a>
                        <div className="search-books-input-wrapper">
                            <input onChange={this.handleChange} type="text" placeholder="Search by title or author" />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.booksFound.map(book => {
                                return <Book key={book.id}
                                    bookId={book.id}
                                    onChangeShelf={this.props.onChangeShelf}
                                    bookShelf={book.shelf}
                                    title={book.title}
                                    authors={book.authors}
                                    image={book.imageLinks.thumbnail} />
                            })}
                        </ol>
                    </div>
                </div>
            </form>


        )
    }
}

export default SearchBook