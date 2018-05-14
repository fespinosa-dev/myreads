import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

    state = { query: '', booksFound: [] };

    handleChange = (event) => {
        this.setState({ query: event.target.value, booksFound: [] });
    }

    handleSubmit = (event) => {
        BooksAPI.search(this.state.query).then((_booksFound) => {
            this.setState(function (prevState) {
                return { query: prevState.query, booksFound: _booksFound }
            });

        });
        event.preventDefault();
    }


    render() {
        console.log(this.state.booksFound);
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
                                console.log(book)
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