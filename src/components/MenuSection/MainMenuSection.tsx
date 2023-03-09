import "./MainMenuSection.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SingleMenuItem from "./SingleMenuItem";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/features/menuSlice";
import type { AppDispatch, RootState } from "../../redux/store/store";

// Interface type for menu
export interface MenuType {
  id: string;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const MainMenuSection = () => {
  // get menu from the store
  const menuData: MenuType[] = useSelector(
    (state: RootState) => state.menu.menu
  ) as MenuType[];

  // get all categories from the Menu Data
  const allCategories = [
    "all",
    ...new Set(menuData.map((item) => item.category)),
  ];

  // important states
  const [menuItems, setMenuItems] = useState(menuData);
  const [menuIndex, setMenuIndex] = useState(0);

  // dispatch function
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch, fetchMenu]);

  // filter menu according to selecting the category items
  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(menuData);
      setMenuIndex(0);
      return;
    } else {
      const newMenuItem = menuData.filter(
        (menu) => menu?.category === category
      );
      setMenuIndex(allCategories.indexOf(category));
      setMenuItems(newMenuItem);
    }
  };

  return (
    <section className="menu-section">
      <Container>
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
