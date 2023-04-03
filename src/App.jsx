import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SiteNav from "./components/SiteNav";

//import SiteFooter from "./components/SiteFooter";
import { Nav } from "react-bootstrap";
import SiteMain from "./components/SiteMain";

function App() {
  return (
    <>
      <SiteNav brand="Epibooks">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </SiteNav>
      <SiteMain />
    </>
  );
}

export default App;
