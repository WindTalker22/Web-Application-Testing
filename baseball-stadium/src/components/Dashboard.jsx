import React from "react"

const Dashboard = props => {
  return (
    <div>
      <h1>Score Tracker</h1>

      <div className="buttons">
        <button onClick={props.addBall} className="ball scoreboard-button">
          Ball
        </button>
        <button onClick={props.addStrike} className="strike scoreboard-button">
          Strike
        </button>
        <button onClick={props.foul} className="foul scoreboard-button">
          Foul
        </button>
        <button
          data-testid="Hits"
          onClick={props.hit}
          className="hit scoreboard-button"
        >
          Hits
        </button>
      </div>
    </div>
  )
}

export default Dashboard
