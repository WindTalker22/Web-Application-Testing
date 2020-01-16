import React from "react"

const Display = props => {
  console.log("Display props: ", props)

  return (
    <>
      <div>Strikes: {props.strikeCount}</div>
      <div data-testid="Balls">Balls: {props.ballCount}</div>
      <div>Hits: {props.hits}</div>
    </>
  )
}

export default Display
