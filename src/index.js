import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Good = ({ good, setGood }) => {
  return <Button handleClick={() => setGood(good + 1)} text="good" />;
};
const Neutral = ({ neutral, setNeutral }) => {
  return <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />;
};

const Bad = ({ bad, setBad }) => {
  return <Button handleClick={() => setBad(bad + 1)} text="bad" />;
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

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive"
            value={(good / (good + neutral + bad)) * 100}
          />
        </tbody>
      </table>
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
      {/*it's already a component */}
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
