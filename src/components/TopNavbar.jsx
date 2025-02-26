import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function TopNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Counter App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
