import React from 'react';

const Statistics = ({ good, neutral, bad, total, countPercentage }) => {
  return (
    <div className="container">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPercentage.toFixed(0)}%</p>
    </div>
  );
};

export default Statistics;
