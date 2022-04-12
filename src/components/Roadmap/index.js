import './index.css'
import Section from './components/Section'
import Content from './roadmap'
import Fade from 'react-reveal/Fade'
import r1 from '../../images/roadmap1.png'
import r2 from '../../images/roadmap2.png'
import r3 from '../../images/roadmap3.png'
import r4 from '../../images/roadmap4.png'
import r5 from '../../images/roadmap5.png'
import r6 from '../../images/roadmap6.png'
import m1 from '../../images/m1.png'
import m2 from '../../images/m2.png'
import m3 from '../../images/m3.png'
import m4 from '../../images/m4.png'
import m5 from '../../images/m5.png'
import m6 from '../../images/m6.png'
export default () => {
  return(
    <div className="roadmap-section" id="roadmap">
      <div className="roadmap-steps">
        {/* {Content.map((item, key)=>{
          console.log(item);
          return (
          <Fade bottom duration={1000*parseInt(key)+ 1000}>
            <Section {...item} key={key}/>
          </Fade>
          )
        })} */}
        <div className="first">
        <Fade duration={1500} bottom>
          <h1> Roadmap </h1>
        </Fade>
        <img src={r1} className="right1"></img>
        </div>
        <img src={r2} className="left"></img>
        <img src={r3} className="right"></img>
        <img src={r4} className="left"></img>
        <img src={r5} className="right"></img>
        <img src={r6} className="left"></img>
        <img src={m1} className="mobile-step"></img>
        <img src={m2} className="mobile-step"></img>
        <img src={m3} className="mobile-step"></img>
        <img src={m4} className="mobile-step"></img>
        <img src={m5} className="mobile-step"></img>
        <img src={m6} className="mobile-step"></img>
      </div>
    </div>
  )
}