import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Good = ({ good, setGood }) => {
  return <button onClick={() => setGood(good + 1)}>good</button>;
};
const Neutral = ({ neutral, setNeutral }) => {
  return <button onClick={() => setNeutral(neutral + 1)}>neutral</button>;
};

const Bad = ({ bad, setBad }) => {
  return <button onClick={() => setBad(bad + 1)}>bad</button>;
};

const Feedback = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Good good={good} setGood={setGood} />
      <Neutral neutral={neutral} setNeutral={setNeutral} />
      <Bad bad={bad} setBad={setBad} />
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Feedback
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
