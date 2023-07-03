import axios from 'axios';
import { Hero, Player, PlayerInfo } from '../types/player';

const baseUrl = 'https://overfast-api.tekrop.fr/';

const getPlayers = async (playerName: string): Promise<Player[]> => {
  const response = await axios.get(
    `${baseUrl}players?name=${playerName}&order_by=name%3Aasc&offset=0&limit=20`
  );

  // first filters out private profiles, then returns a player object
  return response.data.results
    .filter((player: any) => player.privacy === 'public')
    .map((player: any) => ({
      name: player.name,
      id: player.player_id,
      isPrivate: player.privacy === 'private',
    }));
};

const getPlayerInfo = async (playerId: string): Promise<PlayerInfo> => {
  const response = await axios.get(
    `${baseUrl}players/${playerId}/stats/summary`
  );

  let mostPlayedHero: Hero = 'ana';

  for (const hero of Object.keys(response.data.heroes)) {
    const currentHeroTimePlayed =
      response.data.heroes[mostPlayedHero].time_played;
    const nextHeroTimePlayed = response.data.heroes[hero].time_played;
    if (nextHeroTimePlayed > currentHeroTimePlayed) {
      mostPlayedHero = hero as Hero;
    }
  }

  return {
    gamesPlayed: response.data.general.games_played,
    timePlayed: response.data.general.time_played,
    winrate: response.data.general.winrate,
    mostPlayedHero,
  };
};

export default { getPlayers, getPlayerInfo };
