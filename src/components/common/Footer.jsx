import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FooterLink2 } from "../../data/footer-links";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
//import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// Footer data
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

// FooterSection Component
const FooterSection = ({ title, items, withLogo = false }) => (
  <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
    {withLogo && (
      <img src={Logo} alt="Company Logo" className="object-contain mb-3" />
    )}
    <h1 className="text-richblack-50 font-semibold text-[16px]">{title}</h1>
    <div className="flex flex-col gap-2 mt-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
        >
          <Link to={item.split(" ").join("-").toLowerCase()}>{item}</Link>
        </div>
      ))}
    </div>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  withLogo: PropTypes.bool,
};

// Footer Component
const Footer = () => {
  return (
    <div className="bg-richblack-800 text-richblack-400">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent mx-auto py-14 relative">
        <div className="border-b w-full flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <FooterSection
              title="Company"
              items={["About", "Careers", "Affiliates"]}
              withLogo={true}
            />
            <FooterSection title="Resources" items={Resources} />
            <FooterSection title="Plans" items={Plans} />
            <FooterSection title="Community" items={Community} />
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((section, i) => (
              <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  {section.title}
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                  {section.links.map((link, index) => (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent mx-auto pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((item, i) => (
              <div
                key={i}
                className={`${
                  i < BottomFooter.length - 1
                    ? "border-r border-richblack-700"
                    : ""
                } px-3 cursor-pointer hover:text-richblack-50 transition-all duration-200`}
              >
                <Link to={item.split(" ").join("-").toLowerCase()}>{item}</Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            Made with ❤️ Ujjwal © 2023 SkillsSprout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
