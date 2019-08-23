import React from "react";
import "../stylesheets/App.css";
import "../stylesheets/normalize.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './NavigationBar'
import Presentation from './Presentation'

const App = () => {
  return (
      <Router>
        <NavigationBar />
        <Container>
          <Presentation />
        </Container>
        {/* <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </Router>
  );
};

export default App;
