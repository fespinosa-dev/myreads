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
                        {this.props.books.map(book => <Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf}/>)}
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