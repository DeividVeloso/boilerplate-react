import React from 'react';
import FormBook from '../components/Form/Book';
import { connect } from 'react-redux';
import { createBook } from 'store/books/thunks';

class Create extends React.PureComponent {
  handleSubmit = values => {
    return this.props.createBook(values);
  };

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <FormBook onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default connect(
  null,
  { createBook }
)(Create);
