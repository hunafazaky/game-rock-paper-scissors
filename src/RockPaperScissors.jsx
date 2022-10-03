import React, {useState} from "react";
import './App.css';

// Assets

// Bootstrap
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cardCover from './assets/card-cover.jpg';

function App(props) {
  const id_lang = props.descriptions.id_lang;
  const en_lang = props.descriptions.en_lang;
  const playerWeapons = props.playerWeapons
  const computerWeapons = props.computerWeapons;
  const difficulty_colors = ['danger', 'warning', 'secondary', 'info'];
  // State
  const [data, setData] = useState(id_lang);
  const [difficulty, setDifficulty] = useState(difficulty_colors[2]);
  const [activeWeapon, setActiveWeapon] = useState(null);
  const [focusWeapon, setFocusWeapon] = useState(null);
  const [spreadCards, setSpreadCards] = useState(false);

  // Loop
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
  const ComputerWeapons = computerWeapons.map((element, index) =>
    <Card
      bg="dark"
      className={`card-sizing rounded position-absolute shadow-sm p-1`}
      style={{ 
        backgroundImage:cardCover,
        width:'12vw',
        height:'15vw',
        marginLeft:index*4+'vw',
        bottom:'1vw'
      }}
      key={index} 
    >
      <Card.Img
        width="100%"
        height="100%"
        style={{objectFit:'cover'}}
        src={cardCover}
      />
    </Card>
  );

  const PlayerWeapons = playerWeapons.map((element, index) =>
    <Card
      bg="light"
      className={`card-sizing rounded position-absolute shadow-sm p-1`}
      style={{ 
        width:'12vw',
        height:'15vw',
        transition:"all 200ms linear",
        marginLeft:spreadCards === true ? index*8+'vw':index*4+'vw',
        opacity:focusWeapon === null ? '100%':focusWeapon + 1 === index ? '20%':'100%',
        bottom:activeWeapon === index ? '4vw':'1vw',
        border:activeWeapon === index ? '':''
      }}
      key={index} 
      onClick={() => activeWeapon === index ? setActiveWeapon(null):setActiveWeapon(index)}
      onMouseEnter={() => setFocusWeapon(index)}
      onMouseLeave={() => setFocusWeapon(null)}
    >
      <Card.Header className={`text-uppercase fw-bold text-center text-${element.color} p-1`}>
        {element.name}
      </Card.Header>
      <Card.Img 
        width="100%"
        height="100%"
        style={{objectFit:'cover'}}
        variant="top" 
        src={element.src} 
      />
    </Card>
  );
  
  return (
    <div className="App">
      <div className="container">
        {/* <Navbar variant="dark" expand="lg">
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
        </Navbar> */}
        <div className="row">
          <section className="col-md-8 my-2">
            <Card style={{height: '50%', minHeight:'20vw'}} className={`bg-${difficulty} mb-2`}>
              <Card.Header>
                <h5 className="text-light text-end fw-bold">{data.box_title.computer_deck}</h5>
              </Card.Header>
              <Card.Body id="computer_deck">
                <CardGroup>
                  {ComputerWeapons}
                </CardGroup>
              </Card.Body>
            </Card>
            <Card style={{height: '50%', minHeight:'20vw'}} className="bg-success mb-2">
              <Card.Header>
                <h5 className="text-light text-end fw-bold">{data.box_title.player_deck}</h5>
              </Card.Header>
              <Card.Body id="player_deck">
                <div
                  style={{transition:"all 400ms linear", height:'100%'}}
                  onMouseEnter={()=>{setSpreadCards(true)}}
                  onMouseLeave={()=>{setSpreadCards(false)}}
                >
                  <CardGroup>
                    {PlayerWeapons}
                  </CardGroup>
                </div>
              </Card.Body>
            </Card>
          </section>
          <section className="col-md-4 my-2">
            <Card style={{height: '101%'}} className="bg-light mb-2">
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
          </section>
          <footer>
          <a href="https://www.freepik.com/free-vector/abstract-wavy-shape-pattern-blank-background-set_8998552.htm">Image by starline</a> on Freepik
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
