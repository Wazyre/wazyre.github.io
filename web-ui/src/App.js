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
      <h3 className="centerHeader">Abdulaziz Alabduljalil</h3>
      <p className="centerHeader"><a href="https://github.com/Wazyre">Github</a> - <a href="https://www.linkedin.com/in/abdulaziz-alabduljalil/">LinkedIn</a></p>
      <Row>
        <Col>
          <h4>Education</h4>
          <p>B.S. Computer Science and Engineering at University of California, Irvine</p>
          <p>Currently M.S. Computer Science at University of Oregon</p>
          <h4>Techincal Skills & Tools</h4>
        </Col>
      </Row>
      <Row className="flexRow">
        <Col className="listCol">
          <ul>
            <li>Arduino,</li>
            <li>AWS</li>
            <li>Blender</li>
            <li>Git</li>
            <li>Linux</li>
            <li>Maven</li>
            <li>Maven</li>
            <li>SolidWorks</li>
            <li>Unity</li>
          </ul>
        </Col>
        <Col className="listCol">
          <ul>
            <li>C++</li>
            <li>C</li>
            <li>Python</li>
            <li>Java</li>
            <li>C#</li>
            <li>SQL</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>React.js</li>
          </ul>
        </Col>
        <Col className="listCol">
          <ul>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Assembly</li>
            <li>CSS</li>
            <li>LISP</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Research Projects</h3>
          <ul>
            <li>PICARD at UCI</li>
            <li>SCW at CSUN</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Web Development Projects</h3>
          <ul>
            <li>Direct Aid Academy</li>
            <li>Direct Aid Scholarship</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Game Development Projects</h3>
          <a href="https://wazyr.itch.io/"
          >
            Visit Itch.io
          </a>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
