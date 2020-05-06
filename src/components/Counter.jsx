import React from "react";

const counter = (props) => {
  const getBadgeClasses = () => {
    let spanClassName = "badge badge-";
    spanClassName += props.counter.value === 0 ? "warning" : "primary";
    return spanClassName;
  };

  const formatCount = () => {
    const { value: count } = props.counter;
    return count === 0 ? "Zero" : count;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default counter;
