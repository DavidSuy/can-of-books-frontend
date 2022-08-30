import React from "react";
import axios from "axios";
import BooksCarousel from "./Carousel";
let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
      });
    } catch (err) {
      console.log(`We hava an error: ${err.response.data}`);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BooksCarousel books={this.state.books} />
        ) : (
          // <p>Book Carousel coming soon</p>
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
