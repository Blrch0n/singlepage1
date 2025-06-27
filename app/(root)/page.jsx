"use client";
import Hero from "../components/Hero";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import Section4 from "../components/Sections/Section4";
import Section5 from "../components/Sections/Section5";
import Section6 from "../components/Sections/Section6";
import Section7 from "../components/Sections/Section7";
import Section8 from "../components/Sections/Section8";
import Section9 from "../components/Sections/Section9";
import Section10 from "../components/Sections/Section10";
import Section11 from "../components/Sections/Section11";
import Section12 from "../components/Sections/Section12";
import Section13 from "../components/Sections/Section13";
import Section14 from "../components/Sections/Section14";
import Section15 from "../components/Sections/Section15";
import Section16 from "../components/Sections/Section16";
import Section17 from "../components/Sections/Section17";
import { useData } from "@/contexts/DataContext";
import { LoadingScreen } from "../components/LoadingSpinner";

export default function Home() {
  const { loading, error } = useData();

  if (loading) {
    return <LoadingScreen message="Loading website data..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Data
          </h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Hero id="home" />
      {/* About */}
      <div id="about" className="overflow-hidden">
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      {/* Our work */}
      <div id="work" className="overflow-hidden">
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
      {/* Services */}
      <div id="services" className="overflow-hidden">
        <Section9 />
        <Section10 />
      </div>
      {/* Team */}
      <div id="team" className="overflow-hidden">
        <Section11 />
        <Section12 />
        <Section13 />
      </div>
      {/* News */}
      <div id="news" className="overflow-hidden">
        <Section14 />
        <Section15 />
      </div>
      {/* Contact */}
      <div id="contact" className="overflow-hidden">
        <Section16 />
        <Section17 />
      </div>
    </div>
  );
}
