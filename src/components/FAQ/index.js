import './index.css'
import Fade from 'react-reveal/Fade'
import leftBlock from '../../images/left-block.svg'
import rightBlock from '../../images/right-block.svg'
export default () => {
  return(
  <div style={{backgroundColor:"black", margin:0}}>
    <div className="faq-section" id="faq">
      <img src={leftBlock} className='left-block'></img>
      <img src={rightBlock} className='right-block'></img>
      <div className="title">
        <h1>
          FAQ
        </h1>
      </div>
      <div className="questions">
      <Fade delay={400} bottom>
        <div className="qa">
          <h2>Q:    Is there a place to buy off of secondaries?</h2>
          <p><span className="answer">A:  </span>Opensea</p>
        </div>
      </Fade>
      <Fade delay={800} bottom>
        <div className="qa">
          <h2>Q:    What are your secondary royalty fees?</h2>
          <p><span className="answer">A:  </span>6%</p>
        </div>
      </Fade>
      </div>
      <div className="questions" style={{paddingBottom:"10%"}}>
      <Fade delay={1000} bottom>
        <div className="qa">
          <h2>Q:    Total number of tokens:</h2>
          <p><span style={{fontSize: "1.2vw"}}>A:  </span>10,000</p>
        </div>
      </Fade>
      <Fade delay={1200} bottom>
        <div className="qa">
          <h2>Q:    When Is Mint Date?</h2>
          <p><span style={{fontSize: "1.2vw"}}>A:  </span>PRESALE - SUMMER 2022</p>
        </div>
      </Fade>
      </div>
    </div>
  </div>
  )
}