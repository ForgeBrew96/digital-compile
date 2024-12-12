import { Link } from "react-router-dom"
import './Landing.css'

const Landing = () => {
  return (
    <main className="landing-container shared-container">
      <img className="logo" src="../../protocol_images/Screenshots/compile_logo_owned.png" alt="Compile Logo" />
      <h1 className="landing-title">Compile DataBase</h1>

      <p>Compile, the game about competing AI's stacking themed ideas to compile their three protocols and create the ULTIMATE UTOPIA!</p>
      <nav>
        <div className="button-group">
          <Link to="/signin"><button className="action-button">Sign In</button></Link>
          <Link to="/signup"><button className="action-button">Sign Up</button></Link>
        </div>
      </nav>
    </main>
  );
};

export default Landing;