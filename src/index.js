import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RockPaperScissors from './RockPaperScissors';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Assets
import Rock from './assets/rock.jpg';
import Paper from './assets/paper.jpg';
import Scissors from './assets/scissors.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Function
const makeCards = (weapons, multiply, cards = []) => {
  if (multiply !== 0) {
    cards.push(...weapons);
    makeCards(weapons, multiply - 1, cards);
  } return cards;
}

const distributeCards = (allCards, numToDistribute, cards = {player:[], computer:[]}) => {
  if (numToDistribute !== 0) {
    let randomIndex = Math.floor(Math.random()*allCards.length);
    numToDistribute % 2 === 0 ? cards.player.push(allCards[randomIndex]):cards.computer.push(allCards[randomIndex]);  
    allCards.splice(randomIndex, 1);
    distributeCards(allCards, numToDistribute - 1, cards);
  } return cards;
}

// Data
const descriptions = {
  id_lang:{
    brand:'Kertas Gunting Batu',
    menu:{
      restart:'Mulai Lagi',
      difficulty:{
        name:'Kesulitan',
        list:['Musuh dengan Precognition', 'Musuh dengan Hoki Super', 'Musuh Normal', 'Musuh dengan Hoki Ampas']
      },
      language:{
        name:'Bahasa',
        list:['Indonesia', 'English'],
      },
    },
    box_title:{
      computer_deck:'Dek Komputer',
      player_deck:'Dek Pemain',
      game_details:'Detail Permainan'
    },
    details:{
      time_playing:'Waktu Bermain',
      rounds:'Ronde',
      win_rates:'Persentase Menang',
      player_scores:'Skor Pemain',
      computer_scores:'Skor Komputer'
    }
  },
  en_lang:{
    brand:'Rock Paper Scissors',
    menu:{
      restart:'Reset Game',
      difficulty:{
        name:'Difficulty',
        list:['Enemy with Precognition', 'Enemy with Super-Luck', 'Normal Enemy', 'Enemy with Trashy-Luck']
      },
      language:{
        name:'Language',
        list:['Indonesia', 'English'],
      },
    },
    box_title:{
      computer_deck:'Computer Deck',
      player_deck:'Player Deck',
      game_details:'Game Details'
    },
    details:{
      time_playing:'Time Playing',
      rounds:'Rounds',
      win_rates:'Win Rates',
      player_scores:'Player Scores',
      computer_scores:'Computer Scores'
    }
  }
}
const weapons = [
  {
    name: 'Rock',
    color: 'warning',
    src: Rock,
    power : 'Kill Scissors, Killed by Paper'
  },
  {
    name: 'Paper',
    color: 'success',
    src: Paper,
    power : 'Kill Rock, Killed by Scissors'
  },
  {
    name: 'Scissors',
    color: 'danger',
    src: Scissors,
    power : 'Kill Paper, Killed by Rock'
  },
]
const allCards = makeCards(weapons, 4);
const playCards = distributeCards(allCards, 10);

root.render(
  <React.StrictMode>
    <RockPaperScissors 
      descriptions={descriptions}
      playerWeapons={playCards.player}
      computerWeapons={playCards.computer}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
