import './index.css'
import iTitle from '../../images/title2.svg'
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import avatar1 from '../../images/slider1.svg'
import avatar2 from '../../images/slider2.svg'
import avatar3 from '../../images/slider3.svg'
import avatar4 from '../../images/slider4.svg'
import avatar5 from '../../images/slider5.svg'
import avatar6 from '../../images/slider6.svg'
import avatar7 from '../../images/slider7.svg'
import avatar8 from '../../images/slider8.svg'
import avatar9 from '../../images/slider9.svg'
import left from '../../images/left.svg'
import right from '../../images/right.svg'
import Ifire from '../../images/fire.svg'
import VIDEO from '../../assets/video.mp4'
import { useRef } from 'react'
import Fade from 'react-reveal/Fade'
import Shake from 'react-reveal/Shake'
import Zoom from 'react-reveal/Zoom'
const responsive = {
  0: {
    items: 1
  },
  1000: {
    items: 2
  },
  1500: {
    items: 3
  },
};
const Story = () => {
  const ref = useRef(null);
  const [padding, setPadding] = useState(document.body.clientWidth / 1920 * 200)
  useEffect(()=> {
    if (document.body.clientWidth >= 2000)
      setPadding(document.body.clientWidth / 1920 * 200)
    else if (document.body.clientWidth >= 1500)
      setPadding(document.body.clientWidth / 2200 * 200)
    else if (document.body.clientWidth >= 1150)
      setPadding(document.body.clientWidth / 1500 * 200)
    else if (document.body.clientWidth >= 1000)
      setPadding(document.body.clientWidth / 2000 * 200)
    else if (document.body.clientWidth >= 900)
      setPadding(document.body.clientWidth / 1000 * 200)
    else if (document.body.clientWidth >= 600)
      setPadding(document.body.clientWidth / 1200 * 200)
    else setPadding(50)
  },[document.body.clientWidth])
    return (
      <div className="container">
        <Fade left duration={1500}>
        <div className="video">
          <img src={iTitle} alt={"title"}></img>
          <video 
            src={VIDEO} 
            width="100%"
            height="100%"
            autoPlay
            muted
            controls
            loop
          />
        </div>
        </Fade>
        <Fade bottom duration={2000}>
        <div className="story-section" id="story">
          <h1>The Story </h1>
          <p>
            Welcome to the Express world!<br/>
            Who are the Expressers? They can be considered as the connector between people and matters, 
            as well as the vector between city to city or even bigger space. They wear different kinds of 
            clothes shuttling among cities in appearance, and they serve as variable transmitters in a relatively 
            fixed world in cosmology system. Because of the Expressers, the mixed world link as one world. <br/>
            Some of the Expressers are diving experts, some are punk musicians, and some are students. They may 
            work on very important jobs although we do not know very well. Let’s image, if we go back to the 
            primitive world, no advanced technology, no video, and no telephone, the relationship between human 
            and nature just like a blown dandelion, a dust in air, drift apart, unable to communicate, unable to land. 
            And then, who is the messenger between you and the outside. <br/>
            Express nft born in the imaginary world at first, but now they are happening and validating. In 2022, the 
            humans experience hard time, we restrict in a country, a city, a street even in a community, and some even 
            only stay at home. When we find the car-hailing apps unable to work, the food delivers stop taking orders 
            due to not enough time, our life seem back to the original world. You will find, the neighbors kindly bring 
            you some vegetables, the colleagues take you some office supplies back, even you can bring friends go where 
            they want to go although you dislike troubles. At this time, you are surprised to find that no matter who 
            he/she is or who he/she used to be, everyone will become a member of Expressers in an unpredicted time and space.<br/>
            These people, they are not reject the world but accept changes and find their characters and positions in life. 
            Most of them try to use the identity of Expresser to cooperate and integrate together in different views, whatever
            this is a new world of decentralization or a bottom-up republican world. This is far more than a simple choice, 
            but a positive choice when suffering.<br/>
            We are actively creating all kinds of Express nft. They are communities we are determined to build, it’s sort of 
            a peaceful world. In this world, as long as you will, you can take the unique identity to become an important part
            of the linked world, to experience different lives, to participate in a keep moving, friendly and upward community.
          </p>
        </div>
        </Fade>
        <div className="slider" id="fire">
        <Shake delay={500}>
          <AliceCarousel
            ref = {ref}
            duration={200}
            autoPlay={true}
            startIndex = {0}
            infinite={true}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            responsive={responsive}
            autoPlay={false}
            paddingLeft={padding}
            paddingRight={padding}
            disableButtonsControls={true}
            disableDotsControls={true}
          >
            <img src={avatar1} className={"slider-picture"} alt={1}/>
            <img src={avatar2} className={"slider-picture"} alt={2}/>
            <img src={avatar3} className={"slider-picture"} alt={3}/>
            <img src={avatar4} className={"slider-picture"} alt={4}/>
            <img src={avatar5} className={"slider-picture"} alt={5}/>
            <img src={avatar6} className={"slider-picture"} alt={6}/>
            <img src={avatar7} className={"slider-picture"} alt={7}/>
            <img src={avatar8} className={"slider-picture"} alt={8}/>
            <img src={avatar9} className={"slider-picture"} alt={9}/>
          </AliceCarousel>
          </Shake>
          <div className="slider-button">
            <img onClick={() => ref.current.slidePrev()} src={left} alt={"prev"}/>
            <img onClick={() => ref.current.slideNext()} src={right} alt={"next"}/>
          </div>
          <Zoom duration={2000}>
          <div className="express-detail">
            <h1>Multi-box </h1>
            <p>
              In daily life, couriers never leave their express boxes. In the world of Express nft, 
              each courier also own a diversified box. The material and shape of the box varies with the identity 
              of the courier, forming different combinations with the courier, like ♾️. 
              Would you like to have a diversified box such as Pandora’s Box? Come on and join the world of Express nft.
            </p>
            <img src={Ifire} style={{width: "100%", display:"block"}}/>
          </div>
          </Zoom>
        </div>
      </div>

    );
  };
export default Story;