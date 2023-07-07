import { Hero } from '../types/player';
interface MainQuipProps {
  mostPlayedHero: Hero;
}

const MainQuip = ({ mostPlayedHero }: MainQuipProps) => {
  switch (mostPlayedHero) {
    case 'ana':
      return (
        <p>
          {' '}
          They've got a sharp eye for detail, especially when it comes to
          pointing out their teammates' mistakes. They're probably the mom
          friend in the group.
        </p>
      );
    case 'ashe':
      return (
        <p>
          {' '}
          They're the type who thinks they're the coolest gunslinger in town,
          but in reality, they couldn't hit the broad side of a barn without
          Bob's help. Yeehaw, try harder!
        </p>
      );
    case 'baptiste':
      return (
        <p>
          {' '}
          They toss around their "regenerative burst" like it's some kind of
          magical panacea, but nothing can cure that bad aim! Keep those
          band-aids handy, doc!
        </p>
      );
    case 'hanzo':
      return (
        <p>
          {' '}
          The only character that spams more than hanzo is junkrat. Their
          favorite lord of the rings character is legolas.
        </p>
      );
    case 'bastion':
      return (
        <p>
          {' '}
          They're the epitome of creativity in Overwatch—holding down the "W"
          key and left-clicking. Who needs strategy when you can transform into
          a glorified toaster? Beep boop, brainless fun!
        </p>
      );
    case 'brigitte':
      return (
        <p>
          {' '}
          She may swing her flail around like she's the toughest knight in
          shining armor, but deep down, she's just trying to live out her
          medieval LARPing fantasies.
        </p>
      );
    case 'cassidy':
      return (
        <p>
          {' '}
          He struts around like he's the smoothest gunslinger in the Wild West,
          but he spends more time combing his mustache than actually hitting his
          shots. Talk about a desperado with desperate aim!
        </p>
      );
    case 'dva':
      return (
        <p>
          {' '}
          They're all about gaming, snacks, and making the world wonder how they
          manage to win matches while simultaneously eating Doritos.
        </p>
      );
    case 'doomfist':
      return (
        <p>
          {' '}
          He's got a punch that can level a building, but his ego is even
          bigger.
        </p>
      );
    case 'echo':
      return <p> Jack of all trades, master of none.</p>;
    case 'genji':
      return <p> I need healing</p>;
    case 'junker-queen':
      return <p></p>;
    default:
      return null;
  }
};

export default MainQuip;

//   | 'junker-queen'
//   | 'junkrat'
//   | 'kiriko'
//   | 'lifeweaver'
//   | 'lucio'
//   | 'mei'
//   | 'mercy'
//   | 'moira'
//   | 'orisa'
//   | 'pharah'
//   | 'rammatra'
//   | 'reaper'
//   | 'reinhardt'
//   | 'roadhog'
//   | 'sigma'
//   | 'sojourn'
//   | 'solder-76'
//   | 'sombra'
//   | 'symmetra'
//   | 'torbjorn'
//   | 'tracer'
//   | 'widowmaker'
//   | 'winston'
//   | 'wrecking-ball'
//   | 'zarya'
//   | 'zenyatta';
