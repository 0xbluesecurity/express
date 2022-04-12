import './index.css'
import { FaCheck } from 'react-icons/fa'
import { RiRunLine } from 'react-icons/ri'
export default ({isDone,odd,date,title,main_content}) => {
  const isDoneStyle = {
    opacity: "40%"
  }
  return(
    <div className="roadmap-step1" style={isDone?{}:isDoneStyle}>
      <div className="step-left">
        <p>{date}</p>
      </div>
      <div className={odd?"step-right":"step-right-odd"}>
        <div className="right-title">
          <h1>
            {title}
          </h1>
          <div >
            {isDone?<FaCheck/>:<RiRunLine/>}
            <h2>{isDone?"complete":"Ongoing"}</h2>
          </div>
        </div>
        <div className="right-content">
          {main_content}
        </div>
      </div>
    </div>
  )
}