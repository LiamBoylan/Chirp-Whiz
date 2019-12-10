import React, { Component } from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function goToPage() {
  setTimeout(() => window.location.reload(false), 200);
}

class Home extends Component {
    render() {
      return(
        <div className="homepage">
          <br /><h1>Chirp Whiz</h1><br />
          <Router>
          <h2>New to the app?</h2>
          <Link to="/tutorial">
            <Button
              variant="outline-light"
              size="lg"
              style={{backgroundColor: "#ffa333"}}
              onClick={() => goToPage()}
            >Try the tutorial</Button>
          </Link><br /><br />
          <Row>
            <Col>
          <Link to="/glossary">
            <Button variant="light" style={{backgroundColor: "#ffbf00"}} onClick={() => goToPage()}>Check out the glossary</Button>
          </Link>
          </Col>
          <Col>
          <Link to="/user-page">
            <Button variant="light" style={{backgroundColor: "#ffbf00"}} onClick={() => goToPage()}>Go to your user profile</Button>
          </Link>
          </Col>
          </Row>
          <p>
          <Link to="/quiz">
            <Button
              variant="outline-light"
              size="lg"
              style={{backgroundColor: "#ffa333"}}
              onClick={() => goToPage()}
            >Go to quiz page</Button>
          </Link>
          </p><br />
          </Router>
        </div>
      );
    }
  }

export default Home;