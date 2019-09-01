import React from "react";
import "../stylesheets/App.css";
import "../stylesheets/normalize.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './NavigationBar'
import Presentation from './Presentation'
import News from "./News";
import About from "./About";
import Footer from "./Footer";
const App = () => {
  return (
      <Router>
        <NavigationBar />
        <Container>
          <Presentation />
        <Route path="/" exact component={News} />
        <Route path="/home" component={News} />
        <Route path="/about" component={About} />
        </Container>

        <Footer>

        </Footer>
      </Router>
  );
};

export default App;
