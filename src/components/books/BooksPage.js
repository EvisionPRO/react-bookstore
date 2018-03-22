import React, { PropTypes } from 'react';

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
    alert(`Saving ${this.state.books.title}`);
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <h2>Add Course</h2>

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

export default BooksList;
