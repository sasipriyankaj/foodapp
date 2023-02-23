import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type MainTemplateType = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
