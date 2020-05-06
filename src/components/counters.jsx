import React from "react";
import Counter from "./Counter";

const counters = (props) => {
  const { counters, onReset, onDelete, onIncrement } = props;
  return (
    <div>
      <button className="btn btn-sm btn-primary m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
};

export default counters;
