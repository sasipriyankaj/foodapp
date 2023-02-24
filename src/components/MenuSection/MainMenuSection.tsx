import "./MainMenuSection.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuData from "../../assets/data/MenuItem";
import SingleMenuItem from "./SingleMenuItem";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

// get all categories from the Menu Data
const allCategories = [
  "all",
  ...new Set(MenuData.map((item) => item.category)),
];

const MainMenuSection = () => {
  // important states
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories, setCategories] = useState(allCategories);
  const [menuIndex, setMenuIndex] = useState(0);

  // filter menu according to selecting the category items
  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(MenuData);
      setMenuIndex(0);
      return;
    } else {
      const newMenuItem = MenuData.filter((menu) => menu.category === category);
      setMenuIndex(allCategories.indexOf(category));
      setMenuItems(newMenuItem);
    }
  };

  return (
    <section className="menu-section">
      <Container>
        <div className="menu-section-top">
          <Typography variant="h2">Our Menu</Typography>
        </div>
        <div className="category-section">
          <CategoryItem
            categories={allCategories}
            filterItems={filterItems}
            menuIndex={menuIndex}
          />
        </div>
        <Grid container spacing={4}>
          {menuItems.map((data) => {
            return <SingleMenuItem data={data} key={data.id} />;
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default MainMenuSection;
