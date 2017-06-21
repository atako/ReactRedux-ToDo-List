import React from 'react';

import Form from '../components/form';
import { addTodo } from '../actions';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  } 

  handleAdd(title) {
    console.log(title);
    this.store.dispatch(addTodo(title));
  }

  render() {
    return(
      <Form onAdd={this.handleAdd} />
    );
  }
}

export default FormContainer;