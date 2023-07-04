const DisplayPlayerInfo = ({ info }: any) => {
  return (
    <div className="px-16 py-8 rounded-md shadow-md my-4">
      <p>Total Games played: {info.gamesPlayed}</p>
      <p>Total time played: {info.timePlayed}</p>
      <p>Winrate: {info.winrate}%</p>
      <p className="font-bold">This player's main is: {info.mostPlayedHero}</p>
    </div>
  );
};

export default DisplayPlayerInfo;
