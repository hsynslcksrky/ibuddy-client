import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

function Home() {
   return (
    <div className="App" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", paddingLeft: "300px" }}>
      <Container fluid className="p-0 position-relative" style={{ height: "70vh" }}>
        <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg" alt="React logo" className="img-fluid position-absolute top-0 start-50 translate-middle-x" style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", borderRadius:"10%" }} />
        <h1 className="text-center position-absolute top-0 start-50 translate-middle-x text-danger">
          Welcome Lets Get Started
        </h1>
        <Form className="text-center position-absolute bottom-0 start-50 translate-middle-x justify-content-center">
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" style={{ width: "300px" }} />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Get Started
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <footer className="footer" style={{ marginTop: "auto" }}>
        <p>
          Copyright © 2021 
          <a href="https://example.com/">Your Company Name</a>. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
