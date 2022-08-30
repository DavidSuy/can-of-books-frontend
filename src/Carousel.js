import Carousel from "react-bootstrap/Carousel";
import React from "react";

class BooksCarousel extends React.Component {
  bookArr = this.props.books.map((book, idx) => {
    return (
      <Carousel.Item key={idx}>
        <img
          className="d-block w-100"
          src={`https://picsum.photos/200/300?random=${idx}`}
          // src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          {book.status ? "❤️" : "💔"}
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  render() {
    return <Carousel>{this.bookArr}</Carousel>;
  }
}

export default BooksCarousel;
