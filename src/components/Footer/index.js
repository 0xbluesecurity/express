import './index.css'
import logo from '../../images/title2.svg'
import ins from '../../images/ins.svg'
import twitter from '../../images/twitter.svg'
import discord from '../../images/discord.svg'
export default () => {
  return(
    <div className="footer-section">
      <img src={logo} className="logo"/>
      <div className="icon-section">
        <img src={discord} className="icon"/>
        <img src={twitter} className="icon"/>
        <img src={ins} className="icon"/>
      </div>
      <p>2022 Express. All rights reserved.</p>
    </div>
  )
}