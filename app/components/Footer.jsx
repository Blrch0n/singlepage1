"use client";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { motion } from "framer-motion";

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const socialIconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const linkVariants = {
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
    },
  },
};

// Sub-components
const AboutSection = () => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0"
    variants={sectionVariants}
  >
    <motion.h2
      className="text-white text-lg mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      About Enside
    </motion.h2>
    <motion.p
      className="leading-relaxed text-[#b8b8b8]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      We are the comprehensive design and technology partner for the digital
      age. We help businesses to stay relevant to their customers in the digital
      era by touching hearts and minds.
    </motion.p>
  </motion.div>
);

const NewsSection = () => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0"
    variants={sectionVariants}
  >
    <motion.h2
      className="text-white text-lg mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      Recent News
    </motion.h2>
    <div className="space-y-4">
      {RECENT_NEWS.map((news, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          whileHover={{ x: 5 }}
        >
          <h3 className="text-white text-base font-medium mb-1">
            {news.title}
          </h3>
          <p className="text-gray-400 text-sm">{news.date}</p>
          {index < RECENT_NEWS.length - 1 && (
            <motion.hr
              className="border-gray-600 mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const LinksSection = () => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0"
    variants={sectionVariants}
  >
    <motion.h2
      className="text-white text-lg mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      Useful Links
    </motion.h2>
    <ul className="space-y-2 text-[#b8b8b8]">
      {USEFUL_LINKS.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
        >
          <motion.a
            href={link.href}
            className="hover:text-white transition-colors duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            {link.text}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const ContactSection = () => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/4 text-[#b8b8b8]"
    variants={sectionVariants}
  >
    <motion.h2
      className="text-white text-lg mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      Get in Touch
    </motion.h2>
    <div className="space-y-3">
      <motion.p
        className="leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Our support available to help you 24 hours a day, seven days a week.
      </motion.p>
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p>T: + 1 703 4959 3452</p>
        <p>E: test@gmail.com</p>
      </motion.div>
      <motion.div
        className="flex items-center justify-start gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {SOCIAL_ICONS.map((social, index) => (
          <motion.button
            key={index}
            className="hover:text-white transition-colors duration-300 p-2"
            aria-label={`Visit our ${social.name} page`}
            variants={socialIconVariants}
            whileHover="hover"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
          >
            {social.icon}
          </motion.button>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#16181a] w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[40px] sm:py-[50px] lg:py-[60px]">
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutSection />
          <NewsSection />
          <LinksSection />
          <ContactSection />
        </motion.div>
      </div>

      <motion.div
        className="w-full py-6 sm:py-8 text-center bg-[#0d0d0d]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-[#ffffff66] text-[13px] px-4">
          Powered by
          <motion.span
            className="text-white hover:text-[#3452ff] transition duration-300 cursor-pointer ml-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Enside - Premium HTML Template
          </motion.span>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
