import {
  Button,
  Col,
  Container,
  Row,

} from 'react-bootstrap';

import './App.css';
/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
*/
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Research Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Web Development Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://wazyr.itch.io/"
          >
            Game Development Projects
          </a>
        </Col>
      </Row>
      
      
    </Container>
    
  );
}

export default App;
