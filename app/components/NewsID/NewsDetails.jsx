import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const detailData = {
  title: "Brief",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  client: "Client Name",
  projectUrl: "https://example.com",
  projectName: "Project Name",
  category: "Category Name",
};

const NewsDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="w-full mx-auto p-8 bg-white rounded-lg shadow-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="mb-8" variants={itemVariants}>
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {detailData.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {detailData.description}
        </motion.p>
      </motion.div>

      {/* Project Details */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Client
          </span>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {detailData.client}
          </p>
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Project URL
          </span>
          <motion.a
            href={detailData.projectUrl}
            className="mt-1 block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {detailData.projectName}
          </motion.a>
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Category
          </span>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {detailData.category}
          </p>
        </motion.div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-sm font-medium text-gray-500 mr-2">Share:</span>
        <motion.a
          href="#"
          className="flex w-10 h-10 items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
          aria-label="Share on Facebook"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebookF size={16} />
        </motion.a>
        <motion.a
          href="#"
          className="flex w-10 h-10 items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300"
          aria-label="Share on Twitter"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
          whileHover={{
            scale: 1.2,
            rotate: -360,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <BsTwitter size={16} />
        </motion.a>
        <motion.a
          href="#"
          className="flex w-10 h-10 items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300"
          aria-label="Share on LinkedIn"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <BsLinkedin size={16} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default NewsDetails;
