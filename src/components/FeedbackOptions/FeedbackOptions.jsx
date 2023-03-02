import React from 'react';

export const FeedbackOptions = ({ onFeedbackClick, options }) => {
  return (
    <div>
      {options.map(option => (
        <button type="button" key={option} onClick={onFeedbackClick}>
          {option}
        </button>
      ))}
    </div>
  );
};
