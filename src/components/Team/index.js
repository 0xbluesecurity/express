import './index.css'
import avatar1 from '../../images/slider1.svg'
import avatar4 from '../../images/slider4.svg'
import avatar3 from '../../images/slider3.svg'
export default () => {
  return(
    <div className="team-section" id="team">
      <div className="blue-block">
      </div>
      <h1 className="team-title">Meet the team</h1>
      <div className="team-members">
        <img src={avatar1}/>
        <img src={avatar4}/>
        <img src={avatar3}/>
      </div>
      <div className="join-community">
        <h1 >Join the Express</h1>
        <h1 >community</h1>
        <div>
          Join our Discord
        </div>
      </div>
    </div>
  )
}