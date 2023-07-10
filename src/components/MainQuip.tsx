import { Hero } from '../types/player';
interface MainQuipProps {
  mostPlayedHero: Hero | undefined;
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
      return <p>Former roadhog mains are rejoicing after her buff.</p>;
    case 'junkrat':
      return <p>strategy? Throw enough bombs and hope something sticks. </p>;
    case 'kiriko':
      return (
        <p>
          Versatile and Well-rounded, until they teleport through the floor.
        </p>
      );
    case 'lifeweaver':
      return (
        <p>
          It took 4 patches of buffs, but they might not be throwing anymore?
        </p>
      );
    case 'lucio':
      return (
        <p>
          Booping and wall-riding while their team desperately needs healing,
          yep, that's a redditor.
        </p>
      );
    case 'mei':
      return (
        <p>Freezing enemies, or just freezing team progress? Nice wall!</p>
      );
    case 'mercy':
      return <p>Probably boosted &#128521;</p>;
    case 'moira':
      return <p>35k damage 1k healing</p>;
    case 'orisa':
      return <p>giddy up &#128052; </p>;
    case 'pharah':
      return <p>justice rains from ableghhh &#128128; !</p>;
    case 'rammatra':
      return <p>grumpy zenyatta</p>;
    case 'reaper':
      return <p>goes to hot topic one time</p>;
    case 'reinhardt':
      return <p>W key and a dream</p>;
    case 'roadhog':
      return <p>look how they butchered my boy!</p>;
    case 'sigma':
      return <p>rock-solid</p>;
    case 'sojourn':
      return <p>pew pew pew pew</p>;
    case 'soldier-76':
      return <p>reformed call of duty player</p>;
    case 'sombra':
      return (
        <p>
          thinks they are playing splinter cell. spends more time running around
          than shooting.
        </p>
      );
    case 'symmetra':
      return <p>&#129472;</p>;
    case 'torbjorn':
      return <p>he's got the good hammer</p>;
    case 'tracer':
      return (
        <p>
          They zip around so much, you'd think they were trying to outrun their
          commitment issues.
        </p>
      );
    case 'widowmaker':
      return <p>either the best player on the team, or the worst</p>;
    case 'winston':
      return <p>&#129421; winton &#129421;</p>;
    case 'wrecking-ball':
      return <p>a rodent in a maze</p>;
    case 'zarya':
      return <p>when you want to be a dps</p>;
    case 'zenyatta':
      return <p>when you want to be a dps</p>;
    default:
      return null;
  }
};

export default MainQuip;
