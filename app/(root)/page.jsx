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
import Section18 from "../components/Sections/Section18";

// ...existing code...
export default function Home() {
  return (
    <>
      <Hero id="home" />
      {/* About */}
      <div id="about">
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      {/* Our work */}
      <div id="work">
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
      {/* Services */}
      <div id="services">
        <Section9 />
        <Section10 />
      </div>
      {/* Team */}
      <div id="team">
        <Section11 />
        <Section12 />
        <Section13 />
      </div>
      {/* News */}
      <div id="news">
        <Section14 />
        <Section15 />
      </div>
      {/* Contact */}
      <div id="contact">
        <Section16 />
        <Section17 />
        <Section18 />
      </div>
    </>
  );
}
