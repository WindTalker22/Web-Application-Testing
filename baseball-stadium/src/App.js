import React, { useState } from "react"
import "./App.css"
import Display from "./components/Display"
import Dashboard from "./components/Dashboard"

function App(props) {
  const [strikeCount, setStrikeCount] = useState(0)
  const [ballCount, setBallCount] = useState(0)
  const [outs, setOuts] = useState(0)
  const [hits, setHits] = useState(0)

  console.log(strikeCount)
  console.log(ballCount)

  const addStrike = () => {
    setStrikeCount(strikeCount < 2 ? strikeCount + 1 : 0)
  }

  const addBall = () => {
    ballCount < 3
      ? setBallCount(ballCount + 1)
      : setStrikeCount(0) || setBallCount(0)
  }

  // const addBall = () => {
  //   setBallCount(ballCount < 3 ? ballCount + 1 : 0)
  // }

  const hit = () => {
    setHits(hits + 1)
    setStrikeCount(0)
    setBallCount(0)
  }

  const foul = () => {
    setStrikeCount(strikeCount < 2 ? strikeCount + 1 : strikeCount)
  }

  console.log(strikeCount, ballCount, hit, foul)

  return (
    <div className="App">
      <h1>Bronx Bombers</h1>
      <Display strikeCount={strikeCount} ballCount={ballCount} hits={hits} />
      <Dashboard
        addStrike={addStrike}
        addBall={addBall}
        hit={hit}
        foul={foul}
      />
    </div>
  )
}

export default App
