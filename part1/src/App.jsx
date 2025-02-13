import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}

  </button>
)

const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
      return (
        <div>
          <h2>Statistics</h2>
          <p>No feedback given</p>
        </div>
      )
    }else{
      return (
    <div>
      <h2>Statistics</h2>
      <p>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}<br/>
      average {props.average}<br/>
      positive {props.positive}%
      </p>
    </div>
  )
}
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = (good - bad) / (good + bad)
  const positive = good / (good + neutral + bad) * 100

  const goodCont = () => {
    setGood(good+1)
    console.log('good after', good)
  }

  const neutralCont = () => {
    setNeutral(neutral+1)
    console.log('neutral after', neutral)
  }

  const badCont = () => {
    setBad(bad+1)
    console.log('bad after', bad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={goodCont} text='good' />
      <Button onClick={neutralCont} text='neutral' />
      <Button onClick={badCont} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
      </div>
  )
}

export default App