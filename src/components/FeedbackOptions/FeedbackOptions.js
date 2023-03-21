import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options: { good, neutral, bad },
}) => {
  return (
    <>
      <button type="button" onClick={() => onLeaveFeedback(good)}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback(bad)}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,

}
