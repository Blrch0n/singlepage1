const API_BASE_URL = "https://dash-1-iefb.onrender.com/api";

/**
 * Fetch all sections from the API
 * @returns {Promise<Array>} Array of section data
 */
export const fetchAllSections = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sections`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.success ? result.data : [];
  } catch (error) {
    console.error("Error fetching sections:", error);
    return [];
  }
};

/**
 * Fetch a specific section by name and subsection
 * @param {string} sectionName - The main section name (e.g., 'about', 'news')
 * @param {string} subsectionName - The subsection name (e.g., 'main', 'section1')
 * @returns {Promise<Object|null>} Section data or null
 */
export const fetchSectionData = async (
  sectionName,
  subsectionName = "main"
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/sections/${sectionName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.success && result.data) {
      // Find the specific subsection
      const subsection = result.data.find(
        (item) => item.subsectionName === subsectionName
      );
      return subsection || null;
    }
    return null;
  } catch (error) {
    console.error(
      `Error fetching section ${sectionName}/${subsectionName}:`,
      error
    );
    return null;
  }
};

/**
 * Organize sections data by section and subsection for easy access
 * @param {Array} sectionsData - Array of sections from API
 * @returns {Object} Organized sections data
 */
export const organizeSectionsData = (sectionsData) => {
  const organized = {};

  sectionsData.forEach((section) => {
    const { sectionName, subsectionName } = section;

    if (!organized[sectionName]) {
      organized[sectionName] = {};
    }

    organized[sectionName][subsectionName] = section;
  });

  return organized;
};

/**
 * Extract specific data for Hero component
 * @param {Object} organizedData - Organized sections data
 * @returns {Array} Hero slides data
 */
export const getHeroData = (organizedData) => {
  const hero =
    organizedData.hero?.main?.data || organizedData.home?.main?.data || {};

  // Try to get slides from API data
  if (hero.slides && Array.isArray(hero.slides)) {
    return hero.slides.map((slide) => ({
      image: formatImageUrl(
        slide.image || slide.backgroundImage,
        "/image1.jpg"
      ),
      title: slide.title || "Default Title",
      subtitle: slide.subtitle || "Default Subtitle",
      description: slide.description || slide.content || "Default description",
    }));
  }

  // Try alternative structure for hero data
  if (hero.images && Array.isArray(hero.images)) {
    return hero.images.map((image, index) => ({
      image: formatImageUrl(
        image.url || image.src || image,
        `/image${index + 1}.jpg`
      ),
      title: image.title || hero.title || "Trendy. Creative. Awesome.",
      subtitle: image.subtitle || hero.subtitle || "All you need",
      description:
        image.description ||
        hero.description ||
        "We base our work on thorough industry, product and customer research",
    }));
  }

  // Fallback with local images (will be replaced when API provides images)
  return [
    {
      image: "/image1.jpg",
      title: hero.title || "Trendy. Creative. Awesome.",
      subtitle: hero.subtitle || "All you need",
      description:
        hero.description ||
        "We base our work on thorough industry, product and customer research",
    },
    {
      image: "/image2.jpg",
      title: "Modern. Innovative. Bold.",
      subtitle: "Everything you want",
      description:
        "Creating exceptional digital experiences with cutting-edge design",
    },
    {
      image: "/image3.jpg",
      title: "Fresh. Dynamic. Perfect.",
      subtitle: "Just what you need",
      description: "Transforming ideas into stunning visual solutions",
    },
    {
      image: "/image4.jpg",
      title: "Creative. Professional. Unique.",
      subtitle: "Beyond expectations",
      description:
        "Delivering innovative solutions that exceed your expectations",
    },
  ];
};

/**
 * Extract About section data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} About sections data
 */
export const getAboutData = (organizedData) => {
  const about = organizedData.about || {};
  return {
    main: about.main?.data || {},
    section1: about.section1?.data || {},
    section2: about.section2?.data || {},
    section3: about.section3?.data || {},
  };
};

/**
 * Extract Our Work section data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Our Work sections data
 */
export const getOurWorkData = (organizedData) => {
  const ourWork = organizedData.our_work || {};
  return {
    main: ourWork.main?.data || {},
    section1: ourWork.section1?.data || {},
    section2: ourWork.section2?.data || {},
    section3: ourWork.section3?.data || {},
    section4: ourWork.section4?.data || {},
  };
};

/**
 * Extract Services section data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Services sections data
 */
export const getServicesData = (organizedData) => {
  const services = organizedData.services || {};
  return {
    main: services.main?.data || {},
    section1: services.section1?.data || {},
    section2: services.section2?.data || {},
  };
};

/**
 * Extract Team section data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Team sections data
 */
export const getTeamData = (organizedData) => {
  const team = organizedData.team || {};
  return {
    main: team.main?.data || {},
    section1: team.section1?.data || {},
    section2: team.section2?.data || {},
    section3: team.section3?.data || {},
  };
};

/**
 * Extract News section data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} News sections data
 */
export const getNewsData = (organizedData) => {
  const news = organizedData.news || {};
  return {
    main: news.main?.data || {},
    section1: news.section1?.data || {},
    section2: news.section2?.data || {},
  };
};

/**
 * Extract Contact section data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Contact sections data
 */
export const getContactData = (organizedData) => {
  const contact = organizedData.contact || {};
  return {
    main: contact.main?.data || {},
    section1: contact.section1?.data || {},
    section2: contact.section2?.data || {},
  };
};

/**
 * Extract Header data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Header data
 */
export const getHeaderData = (organizedData) => {
  const header = organizedData.header?.main?.data || {};
  return {
    labels: header.labels || [
      "Home",
      "About",
      "Services",
      "Contact",
      "Blog",
      "Help",
    ],
    image: header.image || null,
    colors: header.colors || {},
  };
};

/**
 * Extract Footer data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Footer data
 */
export const getFooterData = (organizedData) => {
  const footer = organizedData.footer?.main?.data || {};
  return {
    about: footer.about || {},
    news: footer.news || {},
    links: footer.links || {},
    contact: footer.contact || {},
    copyright: footer.copyright || "Powered by Enside - Premium HTML Template",
    colors: footer.colors || {},
  };
};

/**
 * Extract General Info data
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} General info data
 */
export const getGeneralInfoData = (organizedData) => {
  const generalInfo = organizedData["general-info"]?.main?.data || {};
  return {
    siteTitle: generalInfo.siteTitle || "Single Page App",
    siteDescription: generalInfo.siteDescription || "Your app description",
    favicon: generalInfo.favicon || "/favicon.ico",
    colors: generalInfo.colors || {},
    labels: generalInfo.labels || [],
  };
};

/**
 * Extract Section8 data (feature cards)
 * @param {Object} organizedData - Organized sections data
 * @returns {Array} Section8 feature cards array
 */
export const getSection8Data = (organizedData) => {
  const section8 = organizedData.services?.section3?.data || {};

  // Try to extract features or cards from the API data
  if (section8.features && Array.isArray(section8.features)) {
    return section8.features.map((feature, index) => ({
      title: feature.title || `Feature ${index + 1}`,
      description:
        feature.description || feature.desciption || "Feature description",
      color:
        feature.color ||
        (index === 0 ? "#664ed3" : index === 1 ? "#ff1053" : "#737884"),
      icon: null, // Icons will be mapped in component based on title
    }));
  }

  // Try alternative structure
  if (section8.cards && Array.isArray(section8.cards)) {
    return section8.cards.map((card, index) => ({
      title: card.title || `Card ${index + 1}`,
      description: card.description || card.desciption || "Card description",
      color:
        card.color ||
        (index === 0 ? "#664ed3" : index === 1 ? "#ff1053" : "#737884"),
      icon: null,
    }));
  }

  // Return null to use fallback in component
  return null;
};

/**
 * Extract Section9 data (capabilities section)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section9 capabilities data
 */
export const getSection9Data = (organizedData) => {
  const services = organizedData.services?.section4?.data || {};
  return {
    header: services.header || {},
    tabs: services.tabs || ["Prototypes", "Development", "Support", "Design"],
    capabilities: services.capabilities || services.features || [],
    stats: services.stats || [],
    statsTitle:
      services.statsTitle || "We create human experience in a digital world",
  };
};

/**
 * Extract Section10 data (image grid)
 * @param {Object} organizedData - Organized sections data
 * @returns {Array} Section10 image grid data
 */
export const getSection10Data = (organizedData) => {
  const services = organizedData.services?.section5?.data || {};

  // Try to get images from API
  if (services.images && Array.isArray(services.images)) {
    return services.images.map((image) => ({
      image: formatImageUrl(image.url || image.src || image.image || image),
      title: image.title || image.name || "Our services",
    }));
  }

  // Try alternative structure
  if (services.grid && Array.isArray(services.grid)) {
    return services.grid.map((item) => ({
      image: formatImageUrl(item.image || item.backgroundImage || item.url),
      title: item.title || item.name || "Service",
    }));
  }

  // Return null to use fallback in component
  return null;
};

/**
 * Extract Section11 data (team section)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section11 team data
 */
export const getSection11Data = (organizedData) => {
  const team = organizedData.team?.main?.data || {};

  // Process team members to ensure image URLs are properly handled
  let members = team.members || team.team || [];
  if (Array.isArray(members)) {
    members = members.map((member) => ({
      image: formatImageUrl(
        member.image || member.avatar || member.photo || member.picture
      ),
      title: member.title || member.name || member.fullName,
      position:
        member.position || member.role || member.description || member.bio,
      ...member,
    }));
  }

  return {
    header: team.header || {},
    members: members,
  };
};

/**
 * Extract Section12 data (parallax concept section)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section12 concept data
 */
export const getSection12Data = (organizedData) => {
  const about = organizedData.about?.section3?.data || {};
  return {
    content: about.content || {},
    features: about.features || [],
  };
};

/**
 * Extract Section13 data (contact CTA)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section13 CTA data
 */
export const getSection13Data = (organizedData) => {
  const contact = organizedData.contact?.section1?.data || {};
  return {
    cta: contact.cta || {},
  };
};

/**
 * Extract Section15 data (partners/logos)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section15 partners data
 */
export const getSection15Data = (organizedData) => {
  const about = organizedData.about?.section4?.data || {};

  // Process partners/logos to ensure image URLs are properly handled
  let partners = about.partners || about.logos || [];
  if (Array.isArray(partners)) {
    partners = partners.map((partner) => {
      if (typeof partner === "string") {
        return formatImageUrl(partner); // Already a URL string
      }
      return formatImageUrl(
        partner.image || partner.logo || partner.url || partner.src || partner
      );
    });
  }

  return {
    header: about.header || {},
    partners: partners,
  };
};

/**
 * Extract Section16 data (contact info)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section16 contact info data
 */
export const getSection16Data = (organizedData) => {
  const contact = organizedData.contact?.main?.data || {};
  return {
    info: contact.info || [],
  };
};

/**
 * Extract Section17 data (final CTA)
 * @param {Object} organizedData - Organized sections data
 * @returns {Object} Section17 final CTA data
 */
export const getSection17Data = (organizedData) => {
  const contact = organizedData.contact?.section2?.data || {};
  return {
    cta: contact.cta || {},
  };
};

/**
 * Helper function to ensure image URLs are properly formatted
 * @param {string} imageUrl - The image URL from API
 * @param {string} fallback - Fallback image URL
 * @returns {string} Properly formatted image URL
 */
export const formatImageUrl = (imageUrl, fallback = "/image1.jpg") => {
  if (!imageUrl) return fallback;

  // If it's already a full URL (starts with http/https), return as is
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  // If it starts with /api/uploads, prepend the base URL
  if (imageUrl.startsWith("/api/uploads")) {
    return `${API_BASE_URL.replace("/api", "")}${imageUrl}`;
  }

  // If it's a relative path, use it as is (for local images)
  return imageUrl;
};
