import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        {socialLinks.map((item) => (
          <div key={item.name} className="w-full h-full">
            <a href={item.link}>
              <img
                src={item.iconUrl}
                alt={item.name}
                className="w-10 h-10 socials"
              ></img>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
