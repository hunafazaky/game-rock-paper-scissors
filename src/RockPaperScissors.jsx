import React, {useState} from "react";
import './App.css';

// Assets
import Rock from './assets/rock.jpg';
import Paper from './assets/paper.jpg';
import Scissors from './assets/scissors.jpg';

// Bootstrap
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App(props) {
  const id_lang = props.descriptions.id_lang;
  const en_lang = props.descriptions.en_lang;
  const difficulty_colors = ['danger', 'warning', 'secondary', 'info'];
  const [data, setData] = useState(id_lang);
  const [difficulty, setDifficulty] = useState(difficulty_colors[2]);
  const [activeWeapon, setActiveWeapon] = useState(null);
  const [focusWeapon, setFocusWeapon] = useState(null);
  const [spreadCards, setSpreadCards] = useState(false);

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
  const WeaponList = [{Rock}, {Paper}, {Scissors}, {Rock}, {Paper}].map((element, index) =>
    <Card
      bg="light"
      border="light"
      className={`card-sizing rounded position-absolute shadow-sm p-1`}
      style={{ 
        transition:"all 200ms linear",
        marginLeft:spreadCards === true ? index*8+'vw':index*4+'vw',
        opacity:focusWeapon === null ? '100%':focusWeapon + 1 === index ? '20%':'100%',
        bottom:activeWeapon === index ? '5vw':'2vw',
        border:activeWeapon === index ? '':''
      }}
      key={index} 
      onClick={() => activeWeapon === index ? setActiveWeapon(null):setActiveWeapon(index)}
      onMouseEnter={() => setFocusWeapon(index)}
      onMouseLeave={() => setFocusWeapon(null)}
    >
      <Card.Header className="text-uppercase fw-bold text-center text-secondary p-1">
        {(Object.keys(element))}
      </Card.Header>
      <Card.Img 
        className="img-sizing"
        variant="top" 
        src={Object.values(element)} 
      />
      <Card.Body>
        <Card.Text className="fw-bold">
          {Object.keys(element)[0] === "Rock" ? "Paper > Rock > Scissors":''}
          {Object.keys(element)[0] === "Paper" ? "Scissors > Paper > Rock":''}
          {Object.keys(element)[0] === "Scissors" ? "Rock > Scissors > Paper":''}
        </Card.Text>
      </Card.Body>
    </Card>
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
            <Card style={{height: '50%', minHeight:'30vw'}} className={`bg-${difficulty} mb-2`}>
              <Card.Header>
                <h5 className="text-light fw-bold">{data.box_title.computer_deck}</h5>
              </Card.Header>
              <Card.Body id="computer_deck">
                <CardGroup
                  style={{transition:"all 250ms linear"}}
                  onMouseEnter={()=>{setSpreadCards(true)}}
                  onMouseLeave={()=>{setSpreadCards(false)}}
                >
                  {WeaponList}
                </CardGroup>
              </Card.Body>
            </Card>
            <Card style={{height: '50%', minHeight:'30vw'}} className="bg-success mb-2">
              <Card.Header>
                <h5 className="text-light fw-bold">{data.box_title.player_deck}</h5>
              </Card.Header>
              <Card.Body id="player_deck">
                <CardGroup
                  style={{transition:"all 250ms linear"}}
                  onMouseEnter={()=>{setSpreadCards(true)}}
                  onMouseLeave={()=>{setSpreadCards(false)}}
                >
                  {WeaponList}
                </CardGroup>
              </Card.Body>
            </Card>
          </section>
          <aside className="col-md-4 my-2">
            <Card style={{height: '101.5%'}} className="bg-light mb-2">
              <Card.Header>
                <h5 className="fw-bold">{data.box_title.game_details}</h5>
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
