import './index.css'
import avatar1 from '../../images/slider1.svg'
import avatar4 from '../../images/slider4.svg'
import avatar3 from '../../images/slider3.svg'
import Fade from 'react-reveal/Fade'
import Shake from 'react-reveal/Shake'
import  { socialLink }  from '../../config'
export default () => {
  return(
    <div className="team-section" id="team">
      <div className="blue-block">
      </div>
      <Fade duration={1500} bottom>
      <h1 className="team-title">Meet the team</h1>
      </Fade>
      <div className="team-members">
      <Fade duration={1500} left>
        <img src={avatar1}/>
      </Fade>
      <Fade duration={1500} bottom>
        <img src={avatar4}/>
      </Fade>
      <Fade duration={1500} right>
        <img src={avatar3}/>
      </Fade>
      </div>
      <Fade delay={500}>
      <div className="join-community">
        <h1 >Join the Express</h1>
        <h1 >community</h1>
        <Shake delay={1500}>
        <div>
          <a href={socialLink.discord} target="_blank">
          Join our Discord
          </a>
        </div>
        </Shake>
      </div>
      </Fade>
    </div>
  )
}