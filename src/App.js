import './App.css';
import Rock from './assets/rock.jpg';
import Paper from './assets/paper.jpg';
import Scissors from './assets/scissors.jpg';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Rock Paper Scissors</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark" />
            <Navbar.Collapse id="navbar-dark">
              <Nav>
                <Nav.Link href="#">New Game</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title="Difficulty"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#">Enemy with Precognition</NavDropdown.Item>
                  <NavDropdown.Item href="#">Enemy with Super-Luck</NavDropdown.Item>
                  <NavDropdown.Item href="#">Normal</NavDropdown.Item>
                  <NavDropdown.Item href="#">Enemy with Bad-Luck</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title="Language"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#">Indonesia</NavDropdown.Item>
                  <NavDropdown.Item href="#">English</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="row">
          <section className="col-md-8 my-2">
            <Card style={{ height: '50%' }} className='bg-danger mb-2'>
              <Card.Header>
                <h6>Computer Deck</h6>
              </Card.Header>
              <Card.Body className="mx-auto" id="computer_deck">
                                <img
                  className="img-sizing thumbnail p-2 rounded-circle rock"
                  alt="rock"
                  src={Rock}
                />
                <img
                  className="img-sizing thumbnail p-2 rounded-circle paper"
                  alt="paper"
                  src={Paper}
                />
                <img
                  className="img-sizing thumbnail p-2 rounded-circle scissor"
                  alt="scissor"
                  src={Scissors}
                />
              </Card.Body>
            </Card>
            <Card style={{ height: '50%' }} className="bg-success mb-2">
              <Card.Header>
                <h6>Player Deck</h6>
              </Card.Header>
              <Card.Body className="mx-auto" id="player_deck">
                                <img
                  className="img-sizing thumbnail p-2 rounded-circle rock"
                  alt="rock"
                  src={Rock}
                />
                <img
                  className="img-sizing thumbnail p-2 rounded-circle paper"
                  alt="paper"
                  src={Paper}
                />
                <img
                  className="img-sizing thumbnail p-2 rounded-circle scissor"
                  alt="scissor"
                  src={Scissors}
                />
              </Card.Body>
            </Card>
          </section>
          <pside className="col-md-4 my-2">
            <Card style={{ height: '101.5%' }} className="bg-light mb-2">
              <Card.Header>
                <h6>Game Details</h6>
              </Card.Header>
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-1 mx-1 text-dark bg-light">
                  <div className="row">
                    <div className="col">
                      <h6 className="text-muted">Time Playing</h6>
                      <h6 className="text-muted">Round(s)</h6>
                      <h6 className="text-muted">Win Rates</h6>
                    </div>
                    <div className="col">
                      <h6 id="play_times">-</h6>
                      <h6 id="play_rounds">0 time(s)</h6>
                      <h6 id="play_rates">0%</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item mb-1 mx-1 text-light bg-danger">
                  <div className="row">
                    <div className="col">
                      <h6>Computer Scores</h6>
                    </div>
                    <div className="col">
                      <h6>III</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item mb-1 mx-1 text-light bg-success">
                  <div className="row">
                    <div className="col">
                      <h6>Player Scores</h6>
                    </div>
                    <div className="col">
                      <h6>IIIII</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </pside>
        </div>
      </div>
    </div>
  );
}

export default App;
