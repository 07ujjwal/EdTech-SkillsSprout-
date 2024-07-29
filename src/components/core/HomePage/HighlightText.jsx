import PropTypes from "prop-types";

const HighlightText = ({ text, className = "" }) => {
  return (
    <span className={`font-bold text-richblue-200 ${className}`}>{text}</span>
  );
};

HighlightText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HighlightText;
