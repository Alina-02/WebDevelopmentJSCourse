import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));

  const [selected, setSelected] = useState(0);
  const [bestAnecdote, setBestAnecdote] = useState(0);
  const [mostVote, setMostVote] = useState(0);

  // 1. Expand the following application by adding a button
  // that can be clicked to display a random anecdote
  function handleRandomEvent() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  // 2. Expand your application so that you can vote for
  // the displayed anecdote
  function handleVoteEvent() {
    const copy = [...points];
    copy[selected] += 1;
    if (copy[selected] > mostVote) {
      setMostVote(copy[selected]);
      setBestAnecdote(selected);
    }
    setPoints(copy);
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={handleVoteEvent}>vote</button>
        <button onClick={handleRandomEvent}>next anecdote</button>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
      </div>
      <div>{anecdotes[bestAnecdote]}</div>
      <div>has {mostVote} votes</div>
    </div>
  );
};

export default App;
