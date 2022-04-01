import './index.css'
import logo from '../../images/title2.svg'
import ins from '../../images/ins.svg'
import twitter from '../../images/twitter.svg'
import discord from '../../images/discord.svg'
import RubberBand from 'react-reveal/RubberBand'
import  { socialLink }  from '../../config'
export default () => {
  return(
    <div className="footer-section">
    <RubberBand duration={1500
    
    
    }>
      <img src={logo} className="logo"/>
    </RubberBand>
      <div className="icon-section">
        <a href={socialLink.discord} target="_blank"><img src={discord} className="icon"/></a>
        <a href={socialLink.twitter} target="_blank"><img src={twitter} className="icon"/></a>
        <img src={ins} className="icon"/>
      </div>
      <p>2022 Express. All rights reserved.</p>
    </div>
  )
}