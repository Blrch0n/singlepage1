"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  fetchAllSections,
  organizeSectionsData,
  getHeroData,
  getAboutData,
  getOurWorkData,
  getServicesData,
  getTeamData,
  getNewsData,
  getContactData,
  getHeaderData,
  getFooterData,
  getGeneralInfoData,
  getSection8Data,
  getSection9Data,
  getSection10Data,
  getSection11Data,
  getSection12Data,
  getSection13Data,
  getSection15Data,
  getSection16Data,
  getSection17Data,
} from "@/lib/api";

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    hero: [],
    about: {},
    ourWork: {},
    services: {},
    team: {},
    news: {},
    contact: {},
    header: {},
    footer: {},
    generalInfo: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all sections data
        const sectionsData = await fetchAllSections();

        if (sectionsData.length === 0) {
          throw new Error("No data received from API");
        }

        // Organize the data
        const organizedData = organizeSectionsData(sectionsData);

        // Extract data for different sections
        const processedData = {
          hero: getHeroData(organizedData),
          about: getAboutData(organizedData),
          ourWork: getOurWorkData(organizedData),
          services: getServicesData(organizedData),
          team: getTeamData(organizedData),
          news: getNewsData(organizedData),
          contact: getContactData(organizedData),
          header: getHeaderData(organizedData),
          footer: getFooterData(organizedData),
          generalInfo: getGeneralInfoData(organizedData),
          section8: getSection8Data(organizedData),
          section9: getSection9Data(organizedData),
          section10: getSection10Data(organizedData),
          section11: getSection11Data(organizedData),
          section12: getSection12Data(organizedData),
          section13: getSection13Data(organizedData),
          section15: getSection15Data(organizedData),
          section16: getSection16Data(organizedData),
          section17: getSection17Data(organizedData),
        };

        setData(processedData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const refetchData = async () => {
    await loadData();
  };

  const value = {
    data,
    loading,
    error,
    refetchData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
