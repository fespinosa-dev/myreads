import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Shelve from './Shelve'
import './App.css'

class MyReadApp extends Component{

    state = {
        books : []

    }


    updateBookShelf = (_book) =>{
        this.setState((prevState) => ({
        
          books : prevState.books.map((book)=>{
                    if(_book.id === book.id){
                        book.shelf = _book.destShelf;
                    }
                    return book;
                
            })
        
        }))
        

        // BooksAPI.update(book, book.destShelf);
    };


    componentDidMount() {
        BooksAPI.getAll().then((books)=>{
            this.setState({
                books : books
            });
        })
    }


    render(){
        let books = this.state.books;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelve title="Currently Reading" onChangeShelf={this.updateBookShelf} 
                                                            books={books.filter(book => book.shelf === "currentlyReading")}  />
                        <Shelve title="Want to Read" onChangeShelf={this.updateBookShelf} 
                                                            books={books.filter(book => book.shelf === "wantToRead")} />
                        <Shelve title="Read" onChangeShelf={this.updateBookShelf} 
                                                            books={books.filter(book => book.shelf === "read")} />
                    </div>
                    {/* open-search */}
                </div>
            </div>
        )
    }
    
}

export default MyReadApp