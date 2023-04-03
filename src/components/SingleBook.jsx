import { Component } from "react";
import { Card, Badge, Col, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Col>
        <Card className="mb-3">
          <Card.Img
            variant="top"
            className="img-fluid object-fit-cover"
            style={{ height: "350px" }}
            src={this.props.image}
            onClick={() => {
              this.setState({ selected: !this.state.selected });
            }}
          />
          <Card.Body>
            <Card.Text className="text-truncate">{this.props.title}</Card.Text>
            <Badge bg="secondary">{this.props.price}</Badge>
          </Card.Body>
          {this.state.selected && (
            <Card.Footer className="text-muted">
              <CommentArea asin={this.props.asin} />
            </Card.Footer>
          )}
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
