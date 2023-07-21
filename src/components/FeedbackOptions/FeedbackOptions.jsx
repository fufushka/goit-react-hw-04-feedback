import React from 'react';
import { feedbacks } from '../../utils/Feedbacks';
import css from './FeedbackOptions.module.scss';
import { nanoid } from 'nanoid';

// import Section from './Section/Section';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      {Object.keys(feedbacks).map(feedback => (
        <button
          type="button"
          className={css.feedbackButtons}
          key={nanoid()}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
