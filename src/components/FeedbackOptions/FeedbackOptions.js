import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options
  // options: { good, neutral, bad },
}) => {
  return (
    <>
      {options.map(el => {
        return (<button key={el} type="button" onClick={() => onLeaveFeedback(`${el}`)}>
          {el}
      </button>)
      } )}
    </>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,

}
