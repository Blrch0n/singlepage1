import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBarToTop from "../components/SideBarToTop";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <SideBarToTop />
      <Footer />
    </>
  );
}
