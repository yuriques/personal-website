import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-mdeium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Elizabeth</span>👋
      <br />A Software Engineer from Australia
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Tinkered with many projects over the years. Check out what I've done"
      link="/projects"
      btnText="Visit my projects"
    />
  ),
  4: (
    <InfoBox
      text="Want to chat? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
