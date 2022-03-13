import './index.css'
export default () => {
  return(
    <div className="faq-section" id="faq">
      <div className="title">
        <h1>
          FAQ
        </h1>
        <p>
          Have any questions? The best place to find out more about Dippies is on Discord - 
          There’s always someone around to help out whenever you need it.
        </p>
      </div>
      <div className="questions">
        <div className="qa">
          <h2>Q:    Is there a place to buy off of secondaries?</h2>
          <p><span style={{fontSize: "2vw"}}>A:  </span>Opensea, Looks Rare</p>
        </div>
        <div className="qa">
          <h2>Q:    What are your secondary royalty fees?</h2>
          <p><span style={{fontSize: "2vw"}}>A:  </span>5%</p>
        </div>
        <div className="qa">
          <h2>Q:    Total number of tokens:</h2>
          <p><span style={{fontSize: "2vw"}}>A:  </span>8888</p>
        </div>
      </div>
    </div>
  )
}