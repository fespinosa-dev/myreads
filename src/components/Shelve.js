import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


const Shelve = (props) =>{
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map(book => <Book key={book.id} book={book} onChangeShelf={props.onChangeShelf}/>)}
                    </ol>
                </div>
            </div>
        )
}

Shelve.propTypes = {

    title : PropTypes.string,
    onChangeShelf : PropTypes.func,
    books : PropTypes.array
    
}

export default Shelve