import Button from "@mui/material/Button";

// CategoryItem Props type
type CategoryItemProps = {
  categories: string[];
  filterItems: (category: string) => void;
  menuIndex: number;
};

const CategoryItem = ({
  categories,
  filterItems,
  menuIndex,
}: CategoryItemProps) => {
  return (
    <div className="category-button-group" data-aos="zoom-in">
      {categories.map((category, index) => {
        return (
          <Button
            variant="contained"
            size="large"
            key={index}
            className={index === menuIndex ? "main-btn" : "rest-btn"}
            onClick={() => filterItems(category)}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryItem;
