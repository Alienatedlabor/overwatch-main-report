import React, { useState, useEffect } from 'react';
import overFastService from './services/overFastService';
import './App.css';
import { PlayerInfo, Player } from './types/player';
import Button from './components/Button';
import DisplayPlayerInfo from './components/DisplayPlayerInfo';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [searched, setSearched] = useState('');
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
  const [showPlayerInfo, setShowPlayerInfo] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const playerList = await overFastService.getPlayers(searched);
    setPlayerList(playerList);
    setShowPlayerInfo(false);
    setPlayerInfo(null);
  };

  const getInfo = async (player_id: string) => {
    try {
      const playerInfo = await overFastService.getPlayerInfo(player_id);
      setPlayerInfo(playerInfo);
      setShowPlayerInfo(true);
    } catch (error) {
      toast.error('This account may have been deleted, something went wrong!', {
        duration: 4000,
      });
    }
  };

  useEffect(() => {
    if (!searched) {
      setShowPlayerInfo(false);
    }
  }, [searched]);

  return (
    <div className="flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row  items-center gap-4 my-2 py-1">
          <h1 className="text-lg">Who's their Overwatch Main? </h1>
          <div className="flex flex-col ">
            <input
              className="border rounded-md ring-1 ring-yellow-600 border-orange-400 px-1"
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
              type="text"
              placeholder="Search for a player"
            />
          </div>

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
            <Button onClick={() => getInfo(player.id)} label={player.name} />
          </li>
        ))}
      </ul>

      {showPlayerInfo && playerInfo && <DisplayPlayerInfo info={playerInfo} />}

      <Toaster />
    </div>
  );
}

export default App;
