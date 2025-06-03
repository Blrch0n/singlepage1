import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const FooterIcons = [
  <FaFacebookF />,
  <FaTwitter />,
  <FaYoutube />,
  <FaPinterest />,
];
const Footer = () => {
  return (
    <div>
      <div>
        <ul className="w-full h-fit flex flex-row items-start justify-between  p-8">
          <li className="w-1/4">
            <h1>About Enside</h1>
            <p>
              We are the comprehensive design and technology partner for the
              digital age. We help businesses to stay relevant to their
              customers in the digital era by touching hearts and minds.
            </p>
          </li>
          <li className="w-1/4">
            <h1>Recent News</h1>
            <div>
              <h1>Building a Better World with Enside</h1>
              <p>November 29, 2017</p>
            </div>
            <hr />
            <div>
              <h1>Enside launches new Industries eCommerce Experience</h1>
              <p>November 29, 2017</p>
            </div>
          </li>
          <li className="w-1/4">
            <h1>Useful Links</h1>
            <ul>
              <li>
                <a href="">FAQ's</a>
              </li>
              <li>
                <a href="">Documentation</a>
              </li>
              <li>
                <a href="">Testimonioals</a>
              </li>
              <li>
                <a href="">Tutorials</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
            </ul>
          </li>
          <li className="w-1/4">
            <h1>Get in Touch</h1>
            <div>
              <p>
                Our support available to help you 24 hours a day, seven days a
                week.
              </p>
              <p>T: + 1 703 4959 3452 </p>
              <p>E: test@gmail.com</p>
              <div className="flex flex-row items-center justify-between w-full mt-4">
                {FooterIcons.map((data, index) => (
                  <div key={index}>{data}</div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full h-fit py-8 text-center">
        <p>
          Powered by
          <span> Enside - Premium HTML Template</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
