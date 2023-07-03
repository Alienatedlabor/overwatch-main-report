import React from 'react';

const DisplayPlayerInfo = ({ info }: any) => {
  console.log(info);
  return (
    <div>
      <p>Total Games played: {info.gamesPlayed}</p>
      <p>Total time played: {info.timePlayed}</p>
      <p>Winrate: {info.winrate}%</p>
      <p>This player's main is: {info.mostPlayedHero}</p>
    </div>
  );
};

export default DisplayPlayerInfo;
