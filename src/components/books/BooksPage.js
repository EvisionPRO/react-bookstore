import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as bookAction from '../../actions/bookActions';

class BooksList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      books: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const books = this.state.books;
    books.title = event.target.value;
    this.setState({books: books});
  }

  onClickSave() {
    this.props.addBook(this.state.books);
  }

  bookRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.props.books.map(this.bookRow)}
        <h2>Add Book</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.books.title} />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="save" />

      </div>
    );
  }
}

BooksList.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  addBook: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBook: books => dispatch(bookAction.addBook(books))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
