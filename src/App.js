import React, { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

// Adding a comment

const App = () => {
  const [appState, setAppState] = useState({
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  });

  const handleDelete = (counterId) => {
    const counters = appState.counters.filter(
      (counter) => counter.id !== counterId
    );
    setAppState({ counters });
  };

  const handleIncrement = (counter) => {
    const counters = [...appState.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setAppState({ counters });
  };

  const handleReset = () => {
    const counters = appState.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setAppState({ counters });
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounters={
          appState.counters.filter((counter) => counter.value > 0).length
        }
      />
      <main className="container">
        <Counters
          counters={appState.counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
