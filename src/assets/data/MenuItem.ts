// Images
import breakfast1 from "../images/breakfast/breakfast1.png";
import breakfast2 from "../images/breakfast/breakfast2.png";
import breakfast3 from "../images/breakfast/breakfast3.png";
import breakfast4 from "../images/breakfast/breakfast4.png";
import breakfast5 from "../images/breakfast/breakfast5.png";
import breakfast6 from "../images/breakfast/breakfast6.png";
import breakfast7 from "../images/breakfast/breakfast7.jpg";
import breakfast8 from "../images/breakfast/breakfast8.jpg";
import breakfast9 from "../images/breakfast/breakfast9.png";
import lunch1 from "../images/lunch/lunch1.png";
import lunch2 from "../images/lunch/lunch2.png";
import lunch3 from "../images/lunch/lunch3.png";
import lunch4 from "../images/lunch/lunch4.png";
import lunch5 from "../images/lunch/lunch5.png";
import lunch6 from "../images/lunch/lunch6.png";
import lunch7 from "../images/lunch/lunch7.jpg";
import lunch8 from "../images/lunch/lunch8.jpg";
import lunch9 from "../images/lunch/lunch9.png";
import dinner1 from "../images/dinner/dinner1.png";
import dinner2 from "../images/dinner/dinner2.png";
import dinner3 from "../images/dinner/dinner3.png";
import dinner4 from "../images/dinner/dinner4.png";
import dinner5 from "../images/dinner/dinner5.png";
import dinner6 from "../images/dinner/dinner6.png";
import dinner7 from "../images/dinner/dinner7.jpg";
import dinner8 from "../images/dinner/dinner8.jpg";
import dinner9 from "../images/dinner/dinner9.png";

// Interface type for menu
export interface MenuType {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const menu: MenuType[] = [
  {
    id: 1,
    title: "Bagel and Cream Cheese",
    category: "breakfast",
    price: 6.99,
    img: breakfast1,
    desc: `A bagel with cream cheese is a classic breakfast or snack consisting of a round, chewy bread roll and a spread made from soft cheese mixed with milk or cream.`,
  },
  {
    id: 2,
    title: "Healthy Meal Plan",
    category: "lunch",
    price: 26.99,
    img: lunch1,
    desc: `Healthy Meal Plan is a nutritious and satisfying dish that combines a succulent steak with a fresh, colorful salad, providing a balanced and flavorful meal `,
  },
  {
    id: 3,
    title: "Salmon and lentil Salad",
    category: "dinner",
    price: 9.99,
    img: dinner1,
    desc: `It is a delicious and nutritious dish that features tender, flaky salmon paired with protein-rich lentils and a variety of fresh vegetables, creating a satisfying and flavorful meal. `,
  },
  {
    id: 4,
    title: "Breakfast Sandwich",
    category: "breakfast",
    price: 9.99,
    img: breakfast2,
    desc: `It is a classic morning meal that features a combination of savory ingredients such as eggs, bacon, cheese, and bread, providing a hearty and delicious start to the day.`,
  },
  {
    id: 5,
    title: "Fried Chicken Steam",
    category: "lunch",
    price: 19.99,
    img: lunch2,
    desc: `"Fried Chicken Steam" is a flavorful and unique dish that starts with tender and juicy steamed chicken, which is then coated in a crispy batter and sautéed with garlic, onion, and melted cheese, resulting in a delicious and satisfying meal.`,
  },
  {
    id: 6,
    title: "Lelmony Salmon Piccata",
    category: "dinner",
    price: 10.99,
    img: dinner2,
    desc: `It is a flavorful and tangy dish that features pan-seared salmon fillets in a lemon and butter sauce with capers, creating a bright and zesty flavor profile that pairs well with a variety of side dishes. `,
  },
  {
    id: 7,
    title: "Baked Chicken",
    category: "breakfast",
    price: 10.99,
    img: breakfast3,
    desc: `A simple and classic dish that involves roasting seasoned chicken in the oven until it's tender, juicy, and golden-brown on the outside. `,
  },
  {
    id: 8,
    title: "Tarragon Rubbed Salmon",
    category: "lunch",
    price: 16.99,
    img: lunch3,
    desc: `A delicious and aromatic dish that features fresh salmon fillets rubbed with a mixture of tarragon, garlic, and olive oil, resulting in a flavorful and healthy meal.`,
  },
  {
    id: 9,
    title: "Pork Tenderloin Pilaff",
    category: "dinner",
    price: 14.99,
    img: dinner3,
    desc: `"Pork Tenderloin Pilaf" is a hearty and flavorful dish that combines tender pork tenderloin with fragrant rice, vegetables, and aromatic spices, resulting in a delicious and satisfying meal.`,
  },
  {
    id: 10,
    title: "Toast Croissant Fried Egg",
    category: "breakfast",
    price: 8.99,
    img: breakfast4,
    desc: `It is a simple and tasty breakfast sandwich that features a fried egg served on a flaky croissant, providing a satisfying and flavorful start to the day. `,
  },
  {
    id: 11,
    title: "Egg Benedict",
    category: "breakfast",
    price: 18.99,
    img: breakfast5,
    desc: `A classic breakfast dish that consists of a poached egg served on top of an English muffin with Canadian bacon and hollandaise sauce, creating a rich and delicious flavor combination. `,
  },
  {
    id: 12,
    title: "Poached Egg with Salad",
    category: "breakfast",
    price: 10.99,
    img: breakfast6,
    desc: `A dish that features a perfectly cooked poached egg served alongside savory meat, toast, and fresh salad greens, resulting in a satisfying and delicious meal. `,
  },
  {
    id: 13,
    title: "Indian Lunch",
    category: "lunch",
    price: 8.99,
    img: lunch4,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 14,
    title: "Chicken Steak",
    category: "lunch",
    price: 15.99,
    img: lunch5,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 15,
    title: "Honey Glazed Salmon",
    category: "lunch",
    price: 15.99,
    img: lunch6,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 16,
    title: "French Fries with Cheese",
    category: "dinner",
    price: 10.99,
    img: dinner4,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 17,
    title: "Garlic Butter Bread Salmon",
    category: "dinner",
    price: 18.99,
    img: dinner5,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 18,
    title: "Backed Chicken",
    category: "dinner",
    price: 23.99,
    img: dinner6,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 19,
    title: "Trafinol Salad",
    category: "breakfast",
    price: 11.99,
    img: breakfast7,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 20,
    title: "Italian Pasta",
    category: "breakfast",
    price: 8.99,
    img: breakfast8,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 21,
    title: "Tomacheese",
    category: "breakfast",
    price: 18.99,
    img: breakfast9,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 22,
    title: "Mashroom Salad",
    category: "lunch",
    price: 13.99,
    img: lunch7,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 23,
    title: "Veg-NonVeg Salad",
    category: "lunch",
    price: 21.99,
    img: lunch8,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 24,
    title: "mozzarella Pasta",
    category: "lunch",
    price: 21.99,
    img: lunch9,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 25,
    title: "Chinese Soup",
    category: "dinner",
    price: 9.99,
    img: dinner7,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 26,
    title: "Japanese Sushi",
    category: "dinner",
    price: 13.99,
    img: dinner8,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
  {
    id: 27,
    title: "Baked Bread with Salad",
    category: "dinner",
    price: 19.99,
    img: dinner9,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, `,
  },
];

export default menu;
