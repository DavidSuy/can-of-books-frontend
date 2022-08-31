import { Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from "react";

export default class PutForm extends React.Component {
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
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.checked || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.handlePut(bookToUpdate);
    this.handleClose();
  }
  
  render() {
    return (
      <>
        <Button onClick={this.show}>Change Book</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form onSubmit={this.helper}>
          <Form.Label>Please make changes to book</Form.Label>
            <Form.Group controlId="title">
              <Form.Label>New Title?</Form.Label>
              <Form.Control type='text' placeholder='...Dune...Twilight'></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>New Description?</Form.Label>
              <Form.Control type='text' placeholder='Lorem Ipsum...'></Form.Control>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Check type='checkbox' label='Is this still a favorite book of yours or not?'></Form.Check>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit Changes
            </Button>
          </Form>
        </Modal>
      </>
    )
  }
}