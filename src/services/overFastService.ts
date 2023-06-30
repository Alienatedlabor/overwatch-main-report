import axios from 'axios';

const baseUrl = 'https://overfast-api.tekrop.fr/';

const getPlayer = (playerName: string) => {
  const request = axios.get(
    `${baseUrl}players?name=${playerName}&order_by=name%3Aasc&offset=0&limit=20`
  );
  return request.then((response) => response.data);
};

const getPlayerInfo = (playerId: string) => {
  const request = axios.get(`${baseUrl}players/${playerId}/stats/summary`);
  return request.then((response) => response.data);
};

export default { getPlayer, getPlayerInfo };
