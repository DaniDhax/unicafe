import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>  
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
      <div>
        <p>{text} {value}</p>
      </div>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  
  if ( all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} />
        <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100} />
      </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  };
  const handleBadClick = () => {
    setBad(bad + 1)
  };

  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
