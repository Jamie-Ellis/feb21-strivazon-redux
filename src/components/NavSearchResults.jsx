import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  state = {
    description: "",
    location: "",
    results: [],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { description, location } = this.state;
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
    );
    const results = await response.json();

    this.setState({ results });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl
                name="description"
                className="me-1"
                type="search"
                placeholder="Search jobs"
                onChange={this.handleChange}
              />
              <FormControl
                name="location"
                type="search"
                placeholder="Location"
                onChange={this.handleChange}
              />

              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row className="mt-5">
            <Col xs={12} md={8} className="mx-auto">
              <h1>Search Jobs...</h1>
              {this.state.results.map((result) => (
                <Col xs={12} className="d-flex">
                  <Col xs={2}>
                    <Image
                      fluid
                      className="result-img"
                      src={result.company_logo}
                    />
                  </Col>
                  <Col xs={10} className="ps-2">
                    <h6 className="mt-3">{result.company}</h6>
                    <Link to={`/${result.id}`} className="btn btn-primary">
                      Show more
                    </Link>
                  </Col>
                </Col>
              ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
