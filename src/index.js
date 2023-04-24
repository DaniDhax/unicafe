import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const statistics = (props) => {
  return (

    
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]= useState(0)
  
  const handleGoodClick = () => {
    setGood (good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral (neutral + 1)
  }
  const handleBadClick = () => {
    setBad (bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p><strong>good {good}</strong></p>
      <p><strong>neutral {neutral}</strong></p>
      <p><strong>bad {bad}</strong></p>
      <p><strong>all {good + neutral + bad}</strong></p>
      <p><strong>average { ((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad) }</strong></p>
      <p><strong>positive { (good / (good + neutral + bad)) * 100 }%</strong></p>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
