import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    books: []
  };
  getRandomBooks(num) {
    const randomBooks = [];
    for (let i = 0; i < num; i++) {
      let rand = Math.floor(Math.random() * this.props.books.length);

      randomBooks.push(this.props.books[rand]);
    }
    return randomBooks;
  }
  componentDidMount = () => {
    this.setState({ books: this.getRandomBooks(15) });
  };
  handleSearch = (searchText) => {
    let keyword = searchText.toLowerCase();
    let filteredBooks = this.props.books.filter((book) => book.title.toLowerCase().match(keyword));
    this.setState({ books: filteredBooks });
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h1 className="text-capitalize">{this.props.title}</h1>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  this.handleSearch(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row lg={4} className="mb-4">
          {this.state.books.map((book, index) => (
            <SingleBook
              key={`book-${this.props.title}-${index}`}
              image={book.img}
              title={book.title}
              price={book.price}
              asin={book.asin}
            />
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
