import { Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from "react";

export default class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  show = () => this.setState({ show: true })
  handleClose = () => {
    this.setState({ show: false })
  }

  helper = (e)=>{
    this.props.handlePost(e);
    this.handleClose();
  }
  
  render() {
    return (
      <>
        <Button onClick={this.show}>Add a Book</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form onSubmit={this.helper}>
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
        </Modal>
      </>
    )
  }
}