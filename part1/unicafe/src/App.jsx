import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.positive}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0.0);
  const [positive, setPositive] = useState(0);

  function handleGoodButton() {
    setGood(good + 1);
    setAll(all + 1);

    let good_aux = good + 1;
    let all_aux = all + 1;

    setAverage((good_aux - bad) / all_aux);
    setPositive((good_aux / all_aux) * 100);
  }

  function handleNeutralButton() {
    setNeutral(neutral + 1);
    setAll(all + 1);

    let all_aux = all + 1;

    setAverage((good - bad) / all_aux);
    setPositive((good / all_aux) * 100);
  }

  function handleBadButton() {
    setBad(bad + 1);
    setAll(all + 1);

    let all_aux = all + 1;
    let bad_aux = bad + 1;

    setAverage((good - bad_aux) / all_aux);
    setPositive((good / all_aux) * 100);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodButton} text="good" />
      <Button onClick={handleNeutralButton} text="neutral" />
      <Button onClick={handleBadButton} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
