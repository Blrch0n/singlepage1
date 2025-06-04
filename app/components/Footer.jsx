import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

// Constants
const SOCIAL_ICONS = [
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaTwitter />, name: "Twitter" },
  { icon: <FaYoutube />, name: "YouTube" },
  { icon: <FaPinterest />, name: "Pinterest" },
];

const RECENT_NEWS = [
  {
    title: "Building a Better World with Enside",
    date: "November 29, 2017",
  },
  {
    title: "Enside launches new Industries eCommerce Experience",
    date: "November 29, 2017",
  },
];

const USEFUL_LINKS = [
  { text: "FAQ's", href: "#" },
  { text: "Documentation", href: "#" },
  { text: "Testimonials", href: "#" },
  { text: "Tutorials", href: "#" },
  { text: "Features", href: "#" },
];

// Sub-components
const AboutSection = () => (
  <div className="w-1/4">
    <h2 className="text-white text-lg mb-4">About Enside</h2>
    <p className=" leading-relaxed text-[#b8b8b8]">
      We are the comprehensive design and technology partner for the digital
      age. We help businesses to stay relevant to their customers in the digital
      era by touching hearts and minds.
    </p>
  </div>
);

const NewsSection = () => (
  <div className="w-1/4">
    <h2 className="text-white text-lg mb-4">Recent News</h2>
    <div className="space-y-4">
      {RECENT_NEWS.map((news, index) => (
        <div key={index}>
          <h3 className="text-white text-base font-medium mb-1">
            {news.title}
          </h3>
          <p className="text-gray-400 text-sm">{news.date}</p>
          {index < RECENT_NEWS.length - 1 && (
            <hr className="border-gray-600 mt-4" />
          )}
        </div>
      ))}
    </div>
  </div>
);

const LinksSection = () => (
  <div className="w-1/4">
    <h2 className="text-white text-lg mb-4">Useful Links</h2>
    <ul className="space-y-2 text-[#b8b8b8]">
      {USEFUL_LINKS.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className=" hover:text-white transition-colors duration-300"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactSection = () => (
  <div className="w-1/4 text-[#b8b8b8]">
    <h2 className="text-white text-lg mb-4">Get in Touch</h2>
    <div className="space-y-3">
      <p className=" leading-relaxed">
        Our support available to help you 24 hours a day, seven days a week.
      </p>
      <div className=" space-y-1">
        <p>T: + 1 703 4959 3452</p>
        <p>E: test@gmail.com</p>
      </div>
      <div className="flex items-center justify-start gap-4 mt-6">
        {SOCIAL_ICONS.map((social, index) => (
          <button
            key={index}
            className=" hover:text-white transition-colors duration-300 p-2"
            aria-label={`Visit our ${social.name} page`}
          >
            {social.icon}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#16181a] w-full">
      <div className="max-w-[1200px] mx-auto px-8 py-[60px]">
        <div className="flex flex-row items-start justify-between gap-8">
          <AboutSection />
          <NewsSection />
          <LinksSection />
          <ContactSection />
        </div>
      </div>

      <div className="w-full py-8 text-center bg-[#0d0d0d]">
        <p className="text-[#ffffff66] text-[13px]">
          Powered by
          <span className="text-white hover:text-[#3452ff] transition duration-300 cursor-pointer ml-1">
            Enside - Premium HTML Template
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
