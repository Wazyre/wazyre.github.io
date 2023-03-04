import {
  Button,
  Col,
  Container,
  Row,

} from 'react-bootstrap';

import './App.scss';
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
    <Container className='contentContainer'>
      <Row>
        <Col>
          <h3 style={{"text-align":"center;"}}>Abdulaziz Alabduljalil</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Research Projects</h3>
          <ol>
            <li>PICARD at UCI</li>
            <li>SCW at CSUN</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Web Development Projects</h3>
          <ol>
            <li>Direct Aid Academy</li>
            <li>Direct Aid Scholarship</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Game Development Projects</h3>
          <a href="https://wazyr.itch.io/"
          >
            Here
          </a>
        </Col>
      </Row>
      
      
    </Container>
    
  );
}

export default App;
