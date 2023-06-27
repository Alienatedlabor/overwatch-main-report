import React, { useState, useEffect } from 'react';
import overFastService from './services/overFastService';
import './App.css';

function App() {
  const [searched, setSearched] = useState('');
  const [playerList, setPlayerList] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    overFastService
      .getPlayer(searched)
      .then((responseData) => setPlayerList(responseData));

    console.log(playerList);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Search for a player: </h1>
          <input
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            type="text"
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <ul>
        {playerList.map((player) => (
          <li>{player.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
