import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class Shelve extends Component{

    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => {
                           return <Book key = {book.id} 
                                        bookId ={book.id}
                                        onChangeShelf={this.props.onChangeShelf}
                                        bookShelf = {book.shelf}
                                        title = {book.title}  
                                        authors = {book.authors}
                                        image = { book.imageLinks.thumbnail}/>
                    })}
                    </ol>
                </div>
            </div>
        )
    }
}

Shelve.propTypes = {

    title : PropTypes.string,
    onChangeShelf : PropTypes.func,
    books : PropTypes.array
    
}

export default Shelve