import { useEffect } from "react";
import MainMenuSection from "../../components/MenuSection/MainMenuSection";
import SectionTop from "../../components/SectionTop/SectionTop";

const Menu = () => {
  // When  i come to this page, it will show from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionTop title="Our Menu" />
      <MainMenuSection />
    </>
  );
};

export default Menu;
