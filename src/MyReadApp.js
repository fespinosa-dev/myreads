import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBook from './components/SearchBook';
import * as BooksAPI from './utils/BooksAPI'
import Shelve from './components/Shelve'
import './MyReadApp.css'

class MyReadApp extends Component {

    state = {
        books: []

    }


    updateBookShelf = (_book) => {
        this.setState((prevState) => ({

            books: prevState.books.map((book) => {
                if (_book.id === book.id) {
                    book.shelf = _book.destShelf;
                }
                return book;

            })

        }))

        BooksAPI.update(_book, _book.destShelf);
    };


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
        })
    }


    render() {
        let books = this.state.books;
        return (
            <div className="app">
                <Route exact path="/" render={() => {
                    return <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Shelve title="Currently Reading" onChangeShelf={this.updateBookShelf}
                                    books={books.filter(book => book.shelf === "currentlyReading")} />
                                <Shelve title="Want to Read" onChangeShelf={this.updateBookShelf}
                                    books={books.filter(book => book.shelf === "wantToRead")} />
                                <Shelve title="Read" onChangeShelf={this.updateBookShelf}
                                    books={books.filter(book => book.shelf === "read")} />
                            </div>
                            <div className="open-search">
                                <Link to="/search" >Add a book</Link>
                            </div>
                        </div>
                    </div>
                }} />
                <Route  path="/search" render={() =>{
                    return <SearchBook mybooks={this.state.books} onChangeShelf={this.updateBookShelf} />
                }}/>

            </div>
        )
    }

}

export default MyReadApp