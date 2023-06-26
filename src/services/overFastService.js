import axios from 'axios';

const baseUrl = 'https://overfast-api.tekrop.fr/';

const getPlayer = (playerName) => {
  const request = axios.get(
    `${baseUrl}players?name=${playerName}&order_by=name%3Aasc&offset=0&limit=20`
  );
  return request.then((response) => console.log(response.data));
};

export default { getPlayer };

//TODO: currently returning only empty array, figure out what's going on
