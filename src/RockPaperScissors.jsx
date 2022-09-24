import React, {useState} from "react";
import './App.css';

// Assets
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
  const difficulty_colors = ['danger', 'warning', 'secondary', 'primary'];
  const [data, setData] = useState(id_lang);
  const [difficulty, setDifficulty] = useState(difficulty_colors[2]);

  const DifficultyList = data.menu.difficulty.list.map((element, index) =>
    <NavDropdown.Item 
      className={'text-'+difficulty_colors[index]} 
      key={index}
      onClick={() => setDifficulty(difficulty_colors[index])}
    >
      {element}
    </NavDropdown.Item>
  );
  const LanguageList = data.menu.language.list.map((element, index) =>
    <NavDropdown.Item 
      key={index} 
      onClick={() => setData(element === 'English'?en_lang:id_lang)}
    >
      {element}
    </NavDropdown.Item>
  );
  
  return (
    <div className="App">
      <div className="container">
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">{data.brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark" />
            <Navbar.Collapse id="navbar-dark">
              <Nav>
                <Nav.Link href="#">{data.menu.restart}</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title={data.menu.difficulty.name}
                  menuVariant="dark"
                >
                  {DifficultyList} 
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark"
                  title={data.menu.language.name}
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
            <Card style={{height: '50%'}} className={`bg-${difficulty} mb-2`}>
              <Card.Header>
                <h6 className="text-light">{data.box_title.computer_deck}</h6>
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
                <h6 className="text-light">{data.box_title.player_deck}</h6>
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
                <h6>{data.box_title.game_details}</h6>
              </Card.Header>
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-1 mx-1 text-dark bg-light">
                  <div className="row">
                    <div className="col">
                      <h6 className="text-muted">{data.details.time_playing}</h6>
                      <h6 className="text-muted">{data.details.rounds}</h6>
                      <h6 className="text-muted">{data.details.win_rates}</h6>
                    </div>
                    <div className="col">
                      <h6 id="play_times">0</h6>
                      <h6 id="play_rounds">0</h6>
                      <h6 id="play_rates">0%</h6>
                    </div>
                  </div>
                </li>
                <li className={`list-group-item mb-1 mx-1 text-light bg-${difficulty}`}>
                  <div className="row">
                    <div className="col">
                      <h6>{data.details.computer_scores}</h6>
                    </div>
                    <div className="col">
                      <h6>III</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item mb-1 mx-1 text-light bg-success">
                  <div className="row">
                    <div className="col">
                      <h6>{data.details.player_scores}</h6>
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
