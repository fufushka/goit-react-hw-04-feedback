import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App = () => {
  const [feedback, setfeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setfeedback(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : (feedback.good / total) * 100;
  };

  return (
    <>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback,sorry" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            countPercentage={countPercentage()}
          />
        )}
      </Section>
    </>
  );
};
export default App;
