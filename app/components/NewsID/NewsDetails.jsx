import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { useData } from "../../../contexts/DataContext";

// Fallback data
const fallbackDetailData = {
  title: "Brief",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  client: "Client Name",
  projectUrl: "https://example.com",
  projectName: "Project Name",
  category: "Category Name",
};

const NewsDetails = ({ newsId }) => {
  const { data, loading, error } = useData();

  // Extract news detail data from API
  const newsData = data?.news || {};
  const detailData =
    newsData.articles?.find((article) => article.id === newsId) ||
    newsData.main?.details ||
    fallbackDetailData;

  if (loading) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("NewsDetails error:", error);
    // Use fallback data on error
  }
  return (
    <motion.div
      className="w-full mx-auto p-8 bg-white rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-xl md:text-3xl font-normal md:font-bold text-gray-900 mb-4">
          {detailData.title}
        </h1>
        <p className="text-[14px] md:text-lg text-gray-700 leading-relaxed">
          {detailData.description || detailData.content || detailData.excerpt}
        </p>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg hover:scale-[1.02] transition-transform duration-300">
        <div className="text-center flex flex-col md:flex-row md:text-left md:justify-center md:items-center gap-2">
          <span className="text-xs md:text-sm font-medium md:font-semibold text-gray-500 uppercase tracking-wide">
            Client:
          </span>
          <p className="mt-1 md:mt-0 text-base md:text-lg font-semibold md:font-bold text-gray-900">
            {detailData.client || detailData.author || "Client Name"}
          </p>
        </div>
        <div className="text-center flex flex-col md:flex-row md:text-left md:justify-center md:items-center gap-2">
          <span className="text-xs md:text-sm font-medium md:font-semibold text-gray-500 uppercase tracking-wide">
            Project URL:
          </span>
          <a
            href={detailData.projectUrl || detailData.url || "#"}
            className="mt-1 md:mt-0 text-base md:text-lg font-semibold md:font-bold text-blue-600 hover:text-blue-800 hover:scale-105 active:scale-95 transition-all duration-200 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            {detailData.projectName || detailData.linkText || "Project Name"}
          </a>
        </div>
        <div className="text-center flex flex-col md:flex-row md:text-left md:justify-center md:items-center gap-2">
          <span className="text-xs md:text-sm font-medium md:font-semibold text-gray-500 uppercase tracking-wide">
            Category:
          </span>
          <p className="mt-1 md:mt-0 text-base md:text-lg font-semibold md:font-bold text-gray-900">
            {detailData.category || "Category Name"}
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-4">
        <span className="text-xs md:text-sm font-medium md:font-semibold text-gray-500 mr-2">
          Share:
        </span>
        <a
          href="#"
          className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 hover:rotate-12 active:scale-90 transition-all duration-300"
          aria-label="Share on Facebook"
        >
          <FaFacebookF size={10} className="md:w-4 md:h-4" />
        </a>
        <a
          href="#"
          className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 hover:scale-110 hover:-rotate-12 active:scale-90 transition-all duration-300"
          aria-label="Share on Twitter"
        >
          <BsTwitter size={10} className="md:w-4 md:h-4" />
        </a>
        <a
          href="#"
          className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 hover:scale-110 hover:rotate-12 active:scale-90 transition-all duration-300"
          aria-label="Share on LinkedIn"
        >
          <BsLinkedin size={10} className="md:w-4 md:h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default NewsDetails;
