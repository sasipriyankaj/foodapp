// Interface about AboutFeature data
interface AboutFeature {
  id: number;
  itemNumber: string;
  title: string;
  desc: string;
}

const data: AboutFeature[] = [
  {
    id: 1,
    itemNumber: "01",
    title: "We are located in the city center",
    desc: "Our prime location in the heart of the city makes us the perfect destination for diners seeking convenient and accessible dining options. Enjoy easy access to local attractions and landmarks while indulging in our delicious cuisine.",
  },
  {
    id: 2,
    itemNumber: "02",
    title: "Fresh ingredients from organic farms",
    desc: "We're passionate about using only the freshest and most flavorful ingredients in our dishes. That's why we source our produce from trusted, organic farms, ensuring that every bite is packed with natural flavor and nutrition.",
  },
  {
    id: 3,
    itemNumber: "03",
    title: "Own fast delivery. 30 min Maximum",
    desc: "We know your time is valuable, which is why we offer our own fast delivery service. With a maximum delivery time of just 30 minutes, you can enjoy our delicious cuisine without any delay, right in the comfort of your own home.",
  },
  {
    id: 4,
    itemNumber: "04",
    title: "Professional, experienced chefs",
    desc: "Our team of expert chefs bring years of experience and culinary creativity to the table. They're dedicated to crafting each dish to perfection, using their extensive training and passion for cooking to create unique and unforgettable flavors.",
  },
  {
    id: 5,
    itemNumber: "05",
    title: "The highest standards of service",
    desc: "We believe that exceptional food deserves exceptional service. Our staff is trained to provide the highest level of service, ensuring that every detail of your dining experience is perfect.",
  },
  {
    id: 6,
    itemNumber: "06",
    title: "We use different payment systems",
    desc: "At our restaurant, we want to make your dining experience as seamless as possible, which is why we've implemented a variety of payment options to fit your needs. Whether you prefer cash, card, or mobile payments, we've got you covered.",
  },
];

export default data;
