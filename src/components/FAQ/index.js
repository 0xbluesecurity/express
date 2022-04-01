import './index.css'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
export default () => {
  return(
    <div className="faq-section" id="faq">
      <div className="title">
        <h1>
          FAQ
        </h1>
        <p>
          Have any questions? The best place to find out more about Express is on Discord - 
          There’s always someone around to help out whenever you need it.
        </p>
      </div>
      <div className="questions">
      <Fade delay={400} bottom>
        <div className="qa">
          <h2>Q:    Is there a place to buy off of secondaries?</h2>
          <p><span style={{fontSize: "2vw"}}>A:  </span>Opensea</p>
        </div>
      </Fade>
      <Fade delay={800} bottom>
        <div className="qa">
          <h2>Q:    What are your secondary royalty fees?</h2>
          <p><span style={{fontSize: "2vw"}}>A:  </span>6%</p>
        </div>
      </Fade>
      <Fade delay={1000} bottom>
        <div className="qa">
          <h2>Q:    Total number of tokens:</h2>
          <p><span style={{fontSize: "2vw"}}>A:  </span>10,000</p>
        </div>
      </Fade>
      </div>
    </div>
  )
}