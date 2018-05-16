import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    state = {
        optionValue: this.props.book.shelf
    }

    handleChange = (event) => {
        this.setState({ optionValue: event.target.value });
        let book = this.props.book;
        book.destShelf = event.target.value;

        this.props.onChangeShelf(book);
    }

    render() {
        let book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 192, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? `${book.imageLinks.thumbnail}` : `http://via.placeholder.com/128x193?text=No%20Cover`})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.optionValue} onChange={this.handleChange}>
                            <option disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{Array.isArray(book.authors) ? book.authors.join(', ') : ''}</div>
            </div>
        )
    }


}

Book.propTypes = {
    book: PropTypes.object
}

export default Book