import PropTypes from "prop-types";
import CTAButton from "../HomePage/Button";
// import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 gap-10`}>
      {/* Section 1 */}
      <div className="w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex h-fit flex-row py-4 lg:w-[500px] text-10px">
        {/* Line Numbers */}
        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          {Array.from({ length: 11 }, (_, i) => (
            <p key={i + 1}>{i + 1}</p>
          ))}
        </div>

        {/* Code Block */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor
            style={{ whiteSpace: "pre-line" }}
            omitDeletionAnimation
          />
        </div>
      </div>
    </div>
  );
};

CodeBlocks.propTypes = {
  position: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  subheading: PropTypes.string.isRequired,
  ctabtn1: PropTypes.shape({
    btnText: PropTypes.string.isRequired,
    linkto: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  ctabtn2: PropTypes.shape({
    btnText: PropTypes.string.isRequired,
    linkto: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  codeblock: PropTypes.string.isRequired,
  codeColor: PropTypes.string.isRequired,
};

export default CodeBlocks;
