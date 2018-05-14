import React, {Component} from 'react' 
import BookShelfChanger from './BookShelfChanger'

class Book extends Component{

    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.image}")`}}></div>
                    <BookShelfChanger  onChange={this.props.onChangeShelf} 
                                       bookId={this.props.bookId} 
                                       bookShelf={this.props.bookShelf}  />
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }


}
export default Book