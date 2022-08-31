import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class AppForm extends React.Component {
  render() {
    return (
      <>
        <h2>Add a book to the database!</h2>
        <Form onSubmit={this.props.handlePost}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='...Dune...Twilight'></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' placeholder='Lorem Ipsum...'></Form.Control>
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Check type='checkbox' label='Is this a favorite book of yours?'></Form.Check>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </>
    )
  }
}