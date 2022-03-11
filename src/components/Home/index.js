import NavBar from '../NavBar'
import './index.css'
import iExpress from '../../images/express.svg'
import iTitle from '../../images/title.png'
import Story from '../Story'
import Roadmap from '../Roadmap'
const Home = () => {
    return (
      <div className="container">
        <NavBar />
        <div className="hero-section">
          <img src={iTitle} preview={false} className="hero-title"></img>
          <div className="hero-man">
            <img src={iExpress} preview={false} className="express-img"></img>
          </div>
          <div className="coming-button">
            <button className="new-button"> coming soon </button>
          </div>
          <div className="intro">
            <p>
              Funk, meet web3. A collection of 8,888 unique digital hippies that
              are building the new free world before our eyes.
            </p>
          </div>
          <div className="social-link">
            <button>Twitter</button>
            <button>Opensea</button>
          </div>
        </div>
        <Story/>
        <Roadmap/>
      </div>
    );
  };
export default Home;
