import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { requestBooks } from 'store/books/thunks';
import { getReadedBooks, getNextBooks } from 'store/books/selectors';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },

  bookReaded: {
    marginTop: 10,
    marginRight: 20,
    marginBottom: 50,
  },
  book: {
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
  },
  buttonAdd: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
});

class Books extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderReadedBooks = this.renderReadedBooks.bind(this);
    this.renderNextBooks = this.renderNextBooks.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
  }

  componentDidMount() {
    this.props.requestBooks();
  }

  handleAddButton() {
    this.props.history.push('books/create');
  }

  renderReadedBooks() {
    const { booksReaded, classes } = this.props;
    return booksReaded.map(book => {
      return (
        <div className={classes.bookReaded}>
          <Card
            title={book.title}
            subtitle={`${book.author} - ${book.year}`}
            image={`http://programadordeguerrilha.com.br/images/${book.image}`}
            synopsis={book.synopsis}
            summary={book.summary}
          />
        </div>
      );
    });
  }

  renderNextBooks() {
    const { booksNext, classes } = this.props;
    return booksNext.map(book => {
      return (
        <div className={classes.book}>
          <Card
            title={book.title}
            subtitle={`${book.author} - ${book.year}`}
            image={`http://programadordeguerrilha.com.br/images/${book.image}`}
            synopsis={book.synopsis}
            summary={book.summary}
          />
        </div>
      );
    });
  }

  render() {
    const { classes } = this.props;
    const renderedReadedBooks = this.renderReadedBooks;
    const renderedNextBooks = this.renderNextBooks;

    return (
      <div>
        <div>
          <Typography variant="title" gutterBottom>
            Livros lidos
          </Typography>
          <div className={classes.content}>{renderedReadedBooks()}</div>
        </div>
        <div>
          <Typography variant="title" gutterBottom>
            Próximos livros
          </Typography>
          <div className={classes.content}>{renderedNextBooks()}</div>
        </div>
        <Button
          className={classes.buttonAdd}
          variant="extendedFab"
          color="primary"
          onClick={this.handleAddButton}
        >
          Adicionar novo livro
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    booksReaded: getReadedBooks(state),
    booksNext: getNextBooks(state),
  };
}
const BooksRedux = connect(
  mapStateToProps,
  { requestBooks }
)(Books);

export default withStyles(styles)(BooksRedux);
