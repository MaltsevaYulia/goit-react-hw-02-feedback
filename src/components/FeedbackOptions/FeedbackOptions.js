export const FeedbackOptions = ({ onLeaveFeedback }) => {
    const typeFeedback = {
      good: 'good',
      neutral: 'neutral',
      bad: 'bad',
    };
  return (
    <>
      <button
        type="button"
        // feedbackType="good"
        onClick={() => onLeaveFeedback(typeFeedback.good)}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => onLeaveFeedback(typeFeedback.neutral)}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => onLeaveFeedback(typeFeedback.bad)}
      >
        Bad
      </button>
    </>
  );
};
