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
    desc: `Experience the flavors of India with our delicious lunch offering of fragrant vegetable curry, fluffy luchi bread, aromatic rice, and fresh vegetable salad, providing a satisfying and wholesome meal.`,
  },
  {
    id: 14,
    title: "Chicken Steak",
    category: "lunch",
    price: 15.99,
    img: lunch5,
    desc: `A hearty and flavorful dish that features a tender and juicy chicken breast, grilled or pan-seared to perfection, served with a variety of sides such as vegetables, potatoes, or rice, creating a delicious and satisfying meal`,
  },
  {
    id: 15,
    title: "Honey Glazed Salmon",
    category: "lunch",
    price: 15.99,
    img: lunch6,
    desc: `"Honey Glazed Salmon" is a delicious and healthy dish that features tender and flaky salmon fillets coated in a sweet and savory honey glaze, creating a mouthwatering flavor profile that pairs well with a variety of side dishes. `,
  },
  {
    id: 16,
    title: "French Fries with Cheese",
    category: "dinner",
    price: 10.99,
    img: dinner4,
    desc: `It is a classic comfort food dish that features crispy and golden fries topped with melted cheese, creating a satisfying and indulgent snack or side dish. `,
  },
  {
    id: 17,
    title: "Garlic Butter Bread Salmon",
    category: "dinner",
    price: 18.99,
    img: dinner5,
    desc: ` A flavorful and aromatic dish that features succulent salmon fillets cooked with a buttery garlic sauce and served alongside toasted bread, creating a satisfying and delicious meal. `,
  },
  {
    id: 18,
    title: "Backed Chicken",
    category: "dinner",
    price: 23.99,
    img: dinner6,
    desc: `A simple and classic dish that involves seasoning chicken and cooking it in the oven until it's tender, juicy, and golden-brown on the outside, resulting in a delicious and versatile meal that pairs well with a variety of side dishes.`,
  },
  {
    id: 19,
    title: "Trafinol Salad",
    category: "breakfast",
    price: 7.99,
    img: breakfast7,
    desc: `A healthy and colorful salad made with fresh lettuce, sliced tomatoes, grated carrots, and a variety of nutritious toppings, providing a tasty and wholesome meal.`,
  },
  {
    id: 20,
    title: "Italian Pasta",
    category: "breakfast",
    price: 8.99,
    img: breakfast8,
    desc: `It is a beloved and versatile dish that typically involves cooking pasta noodles with a flavorful sauce made from ingredients such as tomatoes, garlic, and herbs, resulting in a delicious and satisfying meal that can be customized with a variety of meats, vegetables, and cheeses.`,
  },
  {
    id: 21,
    title: "Tomacheese",
    category: "breakfast",
    price: 18.99,
    img: breakfast9,
    desc: `A flavorful and cheesy dish that features a delicious blend of tomatoes, garlic, onion, and spices, creating a savory and aromatic flavor profile that pairs well with a variety of side dishes. `,
  },
  {
    id: 22,
    title: "Mashroom Salad",
    category: "lunch",
    price: 13.99,
    img: lunch7,
    desc: `"Mushroom salad" is a nutritious and flavorful dish that typically involves mixing fresh mushrooms with a variety of greens, vegetables, and dressings, creating a satisfying and wholesome meal that is both delicious and healthy. `,
  },
  {
    id: 23,
    title: "Veg-NonVeg Salad",
    category: "lunch",
    price: 21.99,
    img: lunch8,
    desc: `A mixed salad that typically includes both vegetarian and non-vegetarian ingredients such as fresh greens, vegetables, nuts, eggs, and meats, creating a delicious and satisfying meal that caters to a wide range of dietary preferences.`,
  },
  {
    id: 24,
    title: "Mozzarella Pasta",
    category: "lunch",
    price: 21.99,
    img: lunch9,
    desc: `"Mozzarella pasta" is a popular Italian dish that typically features pasta noodles coated in a creamy tomato-based sauce and topped with melted mozzarella cheese, resulting in a rich and satisfying meal that is both comforting and delicious.`,
  },
  {
    id: 25,
    title: "Chinese Soup",
    category: "dinner",
    price: 9.99,
    img: dinner7,
    desc: `A nourishing and flavorful dish that typically includes a savory broth made from ingredients such as meat, seafood, vegetables, and spices, creating a comforting and satisfying meal that is often enjoyed as a starter or main course in Chinese cuisine.`,
  },
  {
    id: 26,
    title: "Japanese Sushi",
    category: "dinner",
    price: 13.99,
    img: dinner8,
    desc: `"Japanese sushi" is a popular dish made with specially seasoned rice and a variety of fresh seafood, vegetables, and other ingredients, often rolled into bite-sized pieces or served as individual portions, resulting in a flavorful and colorful culinary experience that is enjoyed worldwide.`,
  },
  {
    id: 27,
    title: "Baked Bread with Salad",
    category: "dinner",
    price: 19.99,
    img: dinner9,
    desc: `A simple yet delicious dish consisting of fresh greens, vegetables, and other toppings served alongside warm, freshly baked bread, offering a satisfying and balanced meal that is easy to prepare and enjoy. `,
  },
];

export default menu;
