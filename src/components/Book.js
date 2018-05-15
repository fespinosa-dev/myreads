import React, { Component } from 'react'

class Book extends Component {

    state = {
        optionValue: this.props.bookShelf
    }

    handleChange = (event) => {
        this.setState({ optionValue: event.target.value });
        this.props.onChangeShelf({
            id: this.props.bookId,
            shelf: this.props.bookShelf,
            destShelf: event.target.value
        })
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.image}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.optionValue} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }


}
export default Book