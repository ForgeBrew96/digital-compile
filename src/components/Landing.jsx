import { Link } from "react-router-dom"
import './Landing.css'

const Landing = () => {
  return (
    <main className="landing-container shared-container">
      <img className="logo" src="/img/Sprout (1).png" alt="App Logo" />
      <h1 className="landing-title">Sprout</h1>

      <p>Discover your passions. Set meaningful goals. Join a community built for growth and self discovery.</p>
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