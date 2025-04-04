import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import TopAdminNav from "./_components/TopAdminNav";


/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContextProvider from "@/contexts/MainContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AcquiredZW",
  description: "AcquiredZW",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainContextProvider>
          
          <TopAdminNav />
          <Header />
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" 
          />
        </MainContextProvider>

      </body>
    </html>
  );
}






