// import important modules
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SingleMenuItem from "./SingleMenuItem";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/features/menuSlice";
import type { AppDispatch, RootState } from "../../redux/store/store";
import loadingImg from "../../assets/images/loading.gif";
import "./MainMenuSection.css";

// Interface =  type for menu
export interface MenuType {
  id: string;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
  appID: string;
}

const MainMenuSection = () => {
  // get menu and loading from the store
  const menuData: MenuType[] = useSelector(
    (state: RootState) => state.menu.menu
  ) as MenuType[];
  const isLoading = useSelector((state: RootState) => state.menu.loading);

  // get all categories from the Menu Data
  const allCategories: string[] = [
    "all",
    ...new Set(menuData && menuData.map((item) => item.category)),
  ];

  // important states
  const [menuItems, setMenuItems] = useState<MenuType[]>(menuData);
  const [menuIndex, setMenuIndex] = useState(0);

  // dispatch function
  const dispatch: AppDispatch = useDispatch();

  // when isLoading is false, the menu item will get the menuData. initially it is not come because of async behavior
  useEffect(() => {
    if (!isLoading) {
      setMenuItems(menuData);
    }
  }, [isLoading]);

  // load the menu, when the menu page load
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

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

  // if the page is loading, state then it show the message loading
  if (isLoading) {
    return (
      <div className="loading-container">
        <img src={loadingImg} alt="loading-img" />
      </div>
    );
  }

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
          {menuItems &&
            menuItems.map((data) => {
              return <SingleMenuItem data={data} key={data.id} />;
            })}
        </Grid>
      </Container>
    </section>
  );
};

export default MainMenuSection;
