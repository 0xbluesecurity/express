import './index.css'
import iTitle from '../../images/title2.svg'
import ReactPlayer from 'react-player'
import AliceCarousel from 'react-alice-carousel';
import avatar1 from '../../images/slider1.svg'
import avatar2 from '../../images/slider2.svg'
import avatar3 from '../../images/slider3.svg'
import avatar4 from '../../images/slider4.svg'
import left from '../../images/left.svg'
import right from '../../images/right.svg'
import { useRef } from 'react';
const responsive = {
  0: {
    items: 1
  },
  900: {
    items: 2
  },
  1280: {
    items: 3
  },
};
const Story = () => {
  const ref = useRef(null);
    return (
      <div className="container">
        <div id="story" className="video">
          <img src={iTitle}></img>
          <ReactPlayer 
            url="https://www.youtube.com/watch?v=-X4ikwUwxoE" 
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="story-section">
          <h1>The Story </h1>
          <p>
            When you picture a hippie, you likely envision a character that is stuck out of time. 
            You picture woodstock, psychedelics, and flowers. In reality, hippies have been evolving over the years, 
            and technology has been enabling a completely new era of hippie to take form... the digital hippie (Dippie). <br/><br/>
            Dippies are modern day adaptations of hippies, with the same values. Ones that are more in touch with society, 
            but who are still quietly carving their own path. Rather than refusing to take part in the system, 
            Dippies are building businesses to layer themselves out of the system. Rather than existing in small 
            communities off the grid, Dippies are building global communities across the world. Rather than refusing the 
            way things are, Dippies are changing the way things are... and many of them are using crypto to do it. 
            Sticking it to the man has become building a new world rooted in decentralization. <br/><br/>
            Our goal when creating the Dippies collection was to commemorate the initial ideas of hippies that we 
            all have, while adding a modern flare. We wanted to create characters that oozed originality and funk, 
            while inspiring you, the community to stand up and create a world you believe in. <br/><br/>
            When you rock a Dippie, you’re rocking rebellion, counter-culture, and freedom. You’re getting access to a 
            connected community that is working together and throwing events for the new world. You’re rocking 
            a character that represents the true free world being built before our eyes.
          </p>
        </div>
        <div className="slider">
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
            paddingLeft={50}
            paddingRight={50}
            disableButtonsControls={true}
            disableDotsControls={true}
          >
            <img src={avatar1} className={"slider-picture"}/>
            <img src={avatar2} className={"slider-picture"}/>
            <img src={avatar3} className={"slider-picture"}/>
            <img src={avatar4} className={"slider-picture"}/>
          </AliceCarousel>
          <div className="slider-button">
            <img onClick={() => ref.current.slidePrev()} src={left}/>
            <img onClick={() => ref.current.slideNext()} src={right}/>
          </div>
          <div className="express-detail">
            <h1>The Fire Pit </h1>
          </div>
        </div>
      </div>

    );
  };
export default Story;