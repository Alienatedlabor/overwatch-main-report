import { useState, useEffect } from 'react';
import overFastService from './services/overFastService';
import './App.css';

function App() {
  const [searched, setSearched] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    overFastService.getPlayer(searched);
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
    </>
  );
}

export default App;
