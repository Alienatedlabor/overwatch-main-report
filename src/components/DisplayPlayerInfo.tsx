import { PlayerInfo } from '../types/player';
import MainQuip from './MainQuip';

interface DisplayPlayerInfoProps {
  info: PlayerInfo | null;
}

const DisplayPlayerInfo = ({ info }: DisplayPlayerInfoProps) => {
  return (
    <div className="px-16 py-8 rounded-md shadow-md my-16">
      <p>Total Games played: {info?.gamesPlayed}</p>
      <p>Total time played: {info?.timePlayed}</p>
      <p>Winrate: {info?.winrate}%</p>
      <p className="font-bold">This player's main is: {info?.mostPlayedHero}</p>
      <MainQuip mostPlayedHero={info?.mostPlayedHero} />
    </div>
  );
};

export default DisplayPlayerInfo;
