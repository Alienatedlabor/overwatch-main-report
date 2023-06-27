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
      .then((responseData) => setPlayerList(responseData.results));

    console.log(playerList);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 my-2 py-1">
          <h1 className="text-lg">Search for a player: </h1>
          <input
            className="border rounded-md ring-1 ring-yellow-600 border-orange-400 px-1"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            type="text"
          />
          <button
            className="bg-orange-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded active:opacity-50 active:border-b-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <ul>
        {playerList.map((player) => (
          <li key={player.name}>
            <button className="bg-orange-500 hover:bg-yellow-600 text-white font-bold py-1 px-4">
              {player.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
