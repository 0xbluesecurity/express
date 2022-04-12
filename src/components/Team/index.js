import './index.css'
import avatar1 from '../../images/express1.png'
import avatar4 from '../../images/express2.png'
import avatar3 from '../../images/express3.png'
import lm from '../../images/lm.png'
import ms from '../../images/ms.png'
import gi from '../../images/gi.png'
import Fade from 'react-reveal/Fade'
import Shake from 'react-reveal/Shake'
import  { socialLink }  from '../../config'
export default () => {
  return(
    <div className="team-section" id="team">
      <Fade duration={1500} bottom>
      <h1 className="team-title">Meet the team</h1>
      </Fade>
      <div className="team-members">
      <Fade duration={1500} left>
        <img src={avatar1} className="pc"/>
        <img src={lm} className="mobile"/>
      </Fade>
      <Fade duration={1500} bottom>
        <img src={avatar4} className="pc"/>
        <img src={ms} className="mobile"/>
      </Fade>
      <Fade duration={1500} right>
        <img src={avatar3} className="pc"/>
        <img src={gi} className="mobile"/>
      </Fade>
      </div>
      <Fade delay={500}>
      <div className="join-community">
        <h1 >Join the Express community</h1>
        <div>
          <a href={socialLink.discord} target="_blank">
          Join our Discord
          </a>
        </div>
      </div>
      </Fade>
    </div>
  )
}