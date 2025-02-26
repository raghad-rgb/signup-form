import "./App.css";
import TopNavbar from "./components/TopNavbar";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  
  const increase = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrease = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <TopNavbar />
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Row className="text-center">
          <Col>
            <Result result={counter} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="m-2" onClick={increase}>
              Increase
            </Button>
            <Button variant="secondary" className="m-2" onClick={decrease}>
              Decrease
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
