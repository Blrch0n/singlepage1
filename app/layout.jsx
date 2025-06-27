import { Nunito } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/contexts/DataContext";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Single page app", // Replace with actual app name
  description: "Your app description", // Replace with meaningful description
  icons: {
    icon: "/favicon.ico", // Ensure favicon.ico exists in public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <DataProvider>{children}</DataProvider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
