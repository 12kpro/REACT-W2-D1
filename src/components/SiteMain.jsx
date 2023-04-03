import { Container, Nav } from "react-bootstrap";
import Welcome from "./Welcome";
import SiteFooter from "./SiteFooter";
import BookList from "./BookList";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const SiteMain = (props) => (
  <>
    <Container>
      <Welcome />
      <BookList title="fantasy" books={fantasy} />
      {/*
      <BookList title="history" books={history} />
      <BookList title="horror" books={horror} />
      <BookList title="romance" books={romance} />
      <BookList title="scifi" books={scifi} />
*/}
      <SiteFooter>
        <Nav.Item>
          <Nav.Link href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <p className="m-0">Copyright EPIBOOK</p>
        </Nav.Item>
      </SiteFooter>
    </Container>
  </>
);

export default SiteMain;
