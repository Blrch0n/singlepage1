"use client";
import { motion } from "framer-motion";
import { useData } from "../../../contexts/DataContext";

// Helper function to format image URLs
const formatImageUrl = (imageUrl, fallback) => {
  if (!imageUrl) return fallback;

  // If it's already a full URL (starts with http/https), return as is
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  // If it starts with /api/uploads, prepend the base URL
  if (imageUrl.startsWith("/api/uploads")) {
    return `https://dash-1-iefb.onrender.com${imageUrl}`;
  }

  // If it's a relative path, use it as is (for local images)
  return imageUrl;
};

// Fallback data
const fallbackData = [
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-2.jpg",
    title: "John Doe",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-1.jpg",
    title: "Jane Smith",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-3.jpg",
    title: "Mike Johnson",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-4.jpg",
    title: "Sarah Wilson",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-5.jpg",
    title: "David Brown",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-6.jpg",
    title: "Lisa Davis",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-7.jpg",
    title: "Tom Miller",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
  {
    image: "https://max-themes.net/demos/enside/main/upload/team-2.jpg",
    title: "Amy Clark",
    position:
      "A designer and art director with 11 years of experience specialized in ui and illustration.",
  },
];

const Section11 = () => {
  const { data, loading, error } = useData();

  // Extract section data from API - use team.section1 which contains the technologies/team data
  const teamData = data?.team?.section1 || {};
  const teamProjects = teamData.projects || [];
  const headerData = {
    subtitle: teamData.subtitle || "team",
    title: teamData.title || "Our Team",
    description:
      teamData.description ||
      "Meet our talented team of designers and developers",
  };

  // Map API projects data to expected format, or use fallback
  const section11Data =
    teamProjects.length > 0
      ? teamProjects.map((project) => ({
          image: project.image,
          title: project.title,
          position: project.position,
        }))
      : fallbackData;

  // Always ensure we have data to display
  const finalData = section11Data.length > 0 ? section11Data : fallbackData;

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[#F5F5F5]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("Section11 error:", error);
    // Use fallback data on error
  }

  return (
    <motion.div
      className="w-full h-fit flex flex-col pt-[100px] pb-[100px] gap-12 items-center justify-center bg-red-200 border-4 border-red-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <div className="w-full h-fit flex flex-col items-center gap-2">
        <h3 className="text-[#828282] text-[16px] uppercase">
          {headerData.subtitle || "team"}
        </h3>
        <h2 className="text-[32px] sm:text-[72px] text-[#2A2F35]">
          {headerData.title || "Our Team"}
        </h2>
        <p className="text-[18px] text-center sm:text-base text-[#999999]">
          {headerData.description ||
            "Meet our talented team of designers and developers"}
        </p>
      </div>

      {/* Team Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-white text-black">
        {finalData.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center relative h-[420px] w-full justify-center text-center p-4 group overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            style={{
              backgroundImage: `url(${formatImageUrl(
                member.image || member.avatar,
                fallbackData[index]?.image
              )})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[#00000080] group-hover:bg-[#3452ffc2] transition-colors duration-300" />

            <div className="relative z-10 text-white p-4">
              <h3 className="text-[18px] font-semibold mb-2">
                {member.title || member.name || `Team Member ${index + 1}`}
              </h3>
              <p className="text-sm opacity-90">
                {member.position ||
                  member.role ||
                  member.description ||
                  "Team member"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section11;
