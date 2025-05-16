import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Get me a Chai",
  description: "Get me a Chai- a web site for funding your projects",
};

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh]  z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}