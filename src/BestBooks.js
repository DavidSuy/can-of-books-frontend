import React from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import BookForm from "./BookFormModal";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      hasBooks: false
    };
  }


  getBooks = async () => {
    let SERVER = process.env.REACT_APP_SERVER;
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
        hasBooks: true
      });
    } catch (err) {
      console.log(`We have an error: ${err.message}`);
    }
  };

  handlePost = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
    }
    this.postBook(newBook);
  }
  postBook = async (book) => {
    let url = `${process.env.REACT_APP_SERVER}/books`;
    let results = await axios.post(url, book);
    console.log(results.data);
    this.setState({
      books: [...this.state.books, results.data]
    });
    this.getBooks();
  }
  componentDidMount() {
    this.getBooks();
  }


  render() {
    let bookArr = this.state.books.map((book, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/200/300?random=${idx}`}
            alt={`${idx} slide`}
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            {book.status ? "❤️" : "💔"}
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.hasBooks ? (<Carousel>{bookArr}</Carousel>) : <h1>Waiting for Books</h1>}
        <BookForm handlePost={this.handlePost}/>
      </>
    );
  }
}

export default BestBooks;
