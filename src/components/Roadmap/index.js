import './index.css'
import Section from './components/Section'
import Content from './roadmap'
import Fade from 'react-reveal/Fade'
export default () => {
  return(
    <div className="roadmap-section" id="roadmap">
    <Fade duration={1500} bottom>
      <h1> Roadmap </h1>
    </Fade>
      <div className="roadmap-steps">
        {Content.map((item, key)=>{
          console.log(item);
          return (
          <Fade bottom duration={1000*parseInt(key)+ 1000}>
            <Section {...item} key={key}/>
          </Fade>
          )
        })}
      </div>
    </div>
  )
}