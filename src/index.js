import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RockPaperScissors from './RockPaperScissors';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const descriptions = {
  id_lang:{
    brand:'Kertas Gunting Batu',
    menu:{
      restart:'Mulai Lagi',
      difficulty:{
        header:'Kesulitan',
        list:['Musuh dengan Precognition', 'Musuh dengan Hoki Super', 'Musuh Normal', 'Musuh dengan Hoki Ampas']
      },
      language:{
        header:'Bahasa',
        list:['Indonesia', 'English'],
      },
    },
    computer:{
      header:'Dek Komputer',
      scores:'Skor Komputer'
    },
    player:{
      header:'Dek Pemain',
      scores:'Skor Pemain'
    },
    details:{
      header:'Detail Permainan',
      time_playing:'Waktu Bermain',
      rounds:'Ronde',
      win_rates:'Persentase Menang'
    }
  },
  en_lang:{
    brand:'Rock Paper Scissors',
    menu:{
      restart:'Reset Game',
      difficulty:{
        header:'Difficulty',
        list:['Enemy with Precognition', 'Enemy with Super-Luck', 'Normal Enemy', 'Enemy with Trashy-Luck']
      },
      language:{
        header:'Language',
        list:['Indonesia', 'English'],
      },
    },
    computer:{
      header:'Computer Deck',
      scores:'Computer Scores'
    },
    player:{
      header:'Player Deck',
      scores:'Player Scores'
    },
    details:{
      header:'Game Details',
      time_playing:'Playing Time',
      rounds:'Round(s)',
      win_rates:'Win Rates'
    }
  }
}
root.render(
  <React.StrictMode>
    <RockPaperScissors descriptions={descriptions}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
