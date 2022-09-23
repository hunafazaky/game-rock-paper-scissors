import React, {useState} from "react";
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

function App(props) {
  const id_lang = props.descriptions.id_lang;
  const en_lang = props.descriptions.en_lang;
  const [state, setState] = useState({
    data:id_lang
  });

  const DifficultyList = state.data.menu.difficulty.list.map((list, index) =>
    <NavDropdown.Item key={index}>{list}</NavDropdown.Item>);
  const LanguageList = state.data.menu.language.list.map((list, index) =>
    <NavDropdown.Item key={index} onClick={() => setState({ data:list === 'English'?en_lang:id_lang})}>{list}</NavDropdown.Item>);
  
  return (
    <div className="App">
      <div className="container">
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">{state.data.brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark" />
            <Navbar.Collapse id="navbar-dark">
              <Nav>
                <Nav.Link href="#">{state.data.menu.restart}</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title={state.data.menu.difficulty.header}
                  menuVariant="dark"
                >
                  {DifficultyList} 
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title={state.data.menu.language.header}
                  menuVariant="dark"
                >
                  {LanguageList}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="row">
          <section className="col-md-8 my-2">
            <Card style={{height: '50%'}} className='bg-danger mb-2'>
              <Card.Header>
                <h6>{state.data.computer.header}</h6>
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
            <Card style={{height: '50%'}} className="bg-success mb-2">
              <Card.Header>
                <h6>{state.data.player.header}</h6>
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
          <aside className="col-md-4 my-2">
            <Card style={{height: '101.5%'}} className="bg-light mb-2">
              <Card.Header>
                <h6>{state.data.details.header}</h6>
              </Card.Header>
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-1 mx-1 text-dark bg-light">
                  <div className="row">
                    <div className="col">
                      <h6 className="text-muted">{state.data.details.time_playing}</h6>
                      <h6 className="text-muted">{state.data.details.rounds}</h6>
                      <h6 className="text-muted">{state.data.details.win_rates}</h6>
                    </div>
                    <div className="col">
                      <h6 id="play_times">0</h6>
                      <h6 id="play_rounds">0</h6>
                      <h6 id="play_rates">0%</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item mb-1 mx-1 text-light bg-danger">
                  <div className="row">
                    <div className="col">
                      <h6>{state.data.computer.scores}</h6>
                    </div>
                    <div className="col">
                      <h6>III</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item mb-1 mx-1 text-light bg-success">
                  <div className="row">
                    <div className="col">
                      <h6>{state.data.player.scores}</h6>
                    </div>
                    <div className="col">
                      <h6>IIIII</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
