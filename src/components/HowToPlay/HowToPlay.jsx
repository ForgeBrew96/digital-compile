import './HowToPlay.css'

const HowToPlay = () => {
    return (
        <>
        <div>
            <img src='./Screenshots/compile_logo_owned.png' className="headingProtocolDB_rules" alt="Protocol Logo" />
        </div>
        <div className='howToPlayLinks'>
            <a href='https://www.youtube.com/watch?v=eTfG6uVmNSM&ab_channel=GreaterThanGames' target = '_blank'>Great Than Games How To Play Guide!</a>
            <a href='https://www.thefamilygamers.com/compile/' target = '_blank'>The Family Gamers: Video Tutorial and Review</a>
        </div>
        <div className="rule-files">
        <img src='./Screenshots/rulebookpg1.jpg.png' className="headingProtocolDB" alt="Protocol Database" />
        <img src='./Screenshots/rulebookpg2.jpg.png' className="headingProtocolDB" alt="Protocol Database" />
        </div>
        </>
    );
  };
  
  export default HowToPlay;