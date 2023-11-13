import { OurServicesIconEnums } from "../enums/OurServicesIconEnum";
import {
  ICategoryWithProducts,
  ICateringPage,
  IOurServices,
  IProductCardList,
  IWhyChooseUs,
} from "../interface/types";

export const productCardList: IProductCardList[] = [
  {
    _id: "1",
    title: "BoonthiLaddu",
    mrpprice: 299,
    offerprice: 250,
    imageUrl: "assets/food-img3.jpg",
  },
  {
    _id: "2",
    title: "BoonthiLaddu",
    mrpprice: 299,
    offerprice: 250,
    imageUrl: "assets/food-img3.jpg",
  },
  {
    _id: "3",
    title: "BoonthiLaddu",
    mrpprice: 299,
    offerprice: 250,
    imageUrl: "assets/food-img3.jpg",
  },
  {
    _id: "4",
    title: "BoonthiLaddu",
    mrpprice: 299,
    offerprice: 250,
    imageUrl: "assets/food-img3.jpg",
  },
];
export const ourServicesData: IOurServices[] = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    iconkey: OurServicesIconEnums.RESTAURANT,
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    iconkey: OurServicesIconEnums.SOUPKITCHENICON,
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    iconkey: OurServicesIconEnums.RESTAURANTMENUICON,
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    iconkey: OurServicesIconEnums.RAMENDININGICON,
  },
];

export const homePageSlicker = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYYwZhx7jjJ654JaZTuMEaq-oYfbRiRviUg&usqp=CAU",
    heading: "Sindhu's Kitchen",
    subHeading: "CATERING TO YOUR NEEDS",
    content:
      "Authentic South Inidan Food and Snacks prepered to give you the Best in Town",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPS9Jsxli1rVML3gCAxXwkDTxOsiSDsYTFyg&usqp=CAU",
    heading: "Sindhu's Kitchen",
    subHeading: "A TASTE OF TRADITION",
    content:
      "Experience the rich and time-honored flavors of South India with our authentic dishes",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.s2ZLXwMZ3JjRPraZJfIxRQHaEK?w=334&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    heading: "Sindhu's Kitchen",
    subHeading: "FLAVORS THAT DANCE ON YOUR PLATE",
    content: "Creating a memorable taste sensation with every bite",
  },
];

export const homeSearchCityDropDown = [
  "Idly",
  "Dosa",
  "Pongal",
  "Vadai",
  "Idiyappam",
];

export const homeSearchMenusDropDown = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtAcGDzRUa-KAAgpdBNZAKXLP2nrFqu-pIQ&usqp=CAU",
    name: "Idly",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcDQzWe9QIT243NTVG9mDD6IMZf6TiLvPhg&usqp=CAU",
    name: "Dosa",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUZ2VdF2AWExggj3I_9W4eFA41aBz4xEKSw&usqp=CAU",
    name: "Pongal",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg2rqiS6bbwjGBZtSH7Rj36lKoDutmUeb6A&usqp=CAU",
    name: "Vadai",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaKWflnOW4iWdbSifBVmutTj6ouDi1tj23g&usqp=CAU",
    name: "Idiyappam",
  },
];

export const snacksMenu = [
  {
    menu: "All",
  },
  {
    menu: "Sweets",
  },
  {
    menu: "Savouries",
  },
];
export const cateringPage: ICateringPage[] = [
  {
    id: "1",
    menuTitle: "Briyani",
    title: "Chicken briyani",
    description: ` Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat.    
      
    Serving sizes:
    Small Tray - can eat 10 members,
    Medium Tray - can eat 20 members,
    Large Tray - can eat 30 members
    `,

    image: "assets/food-img.jpg",
    trayItems: [
      { name: "SmallTray", price: "[$50.00]" },
      { name: "MediumTray", price: "[$100.00]" },
      { name: "LargeTray", price: "[$150.00]" },
    ],
  },
  {
    id: "2",
    title: "Veg briyani",
    description: ` Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat.    
      
    Serving sizes:
   Small Tray - can eat 10 members,
    Medium Tray - can eat 20 members,
   Large Tray - can eat 30 members
    `,
    image: "assets/food-img.jpg",
    trayItems: [
      { name: "SmallTray", price: "[$50.00]" },
      { name: "MediumTray", price: "[$100.00]" },
      { name: "LargeTray", price: "[$150.00]" },
    ],
  },
  {
    id: "3",
    title: "Mutton briyani",
    description: ` Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat.    
      
    Serving sizes:
    Small Tray - can eat 10 members,
    Medium Tray - can eat 20 members,
    Large Tray - can eat 30 members
    `,
    image: "assets/food-img3.jpg",
    trayItems: [
      { name: "SmallTray", price: "[$50.00]" },
      { name: "MediumTray", price: "[$100.00]" },
      { name: "LargeTray", price: "[$150.00]" },
    ],
  },
  {
    id: "4",
    menuTitle: "Non-Veg",
    title: "Fish Finger",
    description: ` Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat.    
      
    Serving sizes:
   Small Tray - can eat 10 members,
    Medium Tray - can eat 20 members,
    Large Tray - can eat 30 members
    `,
    image: "assets/food-img.jpg",
    trayItems: [
      { name: "SmallTray", price: "[$50.00]" },
      { name: "MediumTray", price: "[$100.00]" },
      { name: "LargeTray", price: "[$150.00]" },
    ],
  },
];

export const menuDetailPage = {
  image: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qcxW-LZyWSOEATmYJVrZbjw7Xli7tZ5bOA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTZxbbmPwLA4Pr-7joWZNVBstmb82VW8vaw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuVc7Vyltiev_CTlWPE4RCD4PIvFmQFyCkQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEFXVzvOnwu_X4q1SQsODeLq8UNftaVCLhw&usqp=CAU",
  ],
  title: "Adhirasam",
  price: "20.00",
  description:
    "Adhirasam is a traditional sweet dish which will be done for most of the festivals.",
  netWeight: "5",
  servingSizes: [
    { tray: "Small Tray", members: " Can eat 10 members" },
    { tray: "Medium Tray", members: " Can eat 20 members" },
    { tray: "Large Tray", members: " Can eat 30 members" },
  ],
};
export const categoryWithProducts: ICategoryWithProducts[] = [
  {
    _id: "1",
    data: "Snacks",
    image: "http://localhost:5173/assets/food-img3.jpg",
    products: [
      {
        _id: "654887cda8c6272a22e7334a",
        title: "Boonthi Laddu",
        mrpprice: 299,
        offerprice: 250,
        imageUrl: "/assets/food-img3.jpg",
      },
      {
        _id: "654887cda8c6272a22e7334a",
        title: "Boonthi Laddu",
        mrpprice: 199,
        offerprice: 150,
        imageUrl: "/assets/food-img3.jpg",
      },
      {
        _id: "3",
        title: "Boonthi Laddu",
        mrpprice: 199,
        offerprice: 150,
        imageUrl: "/assets/food-img3.jpg",
      },
      {
        _id: "4",
        title: "Boonthi Laddu",
        mrpprice: 199,
        offerprice: 150,
        imageUrl: "/assets/food-img3.jpg",
      },
    ],
  },
  {
    _id: "2",
    data: "Breakfast",
    image: "",
    products: [
      {
        _id: "1",
        title: "Idli",
        mrpprice: 99,
        offerprice: 75,
        imageUrl: "/assets/images/dosa.jpg",
      },
      {
        _id: "2",
        title: "Dosa",
        mrpprice: 149,
        offerprice: 120,
        imageUrl: "/assets/images/dosa.jpg",
      },
      {
        _id: "3",
        title: "Appam",
        mrpprice: 149,
        offerprice: 120,
        imageUrl: "/assets/images/dosa.jpg",
      },
      {
        _id: "4",
        title: "Dosa",
        mrpprice: 149,
        offerprice: 120,
        imageUrl: "/assets/images/dosa.jpg",
      },
    ],
  },
];

export const WhyChooseUsData: IWhyChooseUs[] = [
  {
    id: 1,
    title: "Pure Beginnings",
    description:
      "Our culinary creations start with the purest water in all our food and snacks preparation.",
    imageicon: "🌊",
    image:
      "https://img.freepik.com/free-photo/woman-holding-glass-filled-with-water_23-2148728797.jpg?size=626&ext=jpg&ga=GA1.1.1103622480.1683545544&semt=ais",
  },
  {
    id: 2,
    title: "Premium Oils",
    description:
      "Exclusively cold-pressed Sesame and Peanut oils enhance our dishes.",
    imageicon: "🥜",
    image:
      "https://img.freepik.com/free-photo/soybean-oil-soybean-food-beverage-products-food-nutrition-concept_1150-26351.jpg?size=626&ext=jpg&ga=GA1.1.1103622480.1683545544&semt=ais",
  },
  {
    id: 3,
    title: "Sourced with Care",
    description:
      "We curate our dishes with premium ingredients, some specially sourced from the heart of Tamil Nadu, India.",
    imageicon: "🌾 ",
    image:
      "https://img.freepik.com/free-photo/grinder-wooden-spoon-with-spices_23-2148601118.jpg?size=626&ext=jpg&ga=GA1.1.1103622480.1683545544&semt=ais",
  },
  {
    id: 4,
    title: "Unmatched Freshness",
    description:
      "Enjoy meals prepared on the very same day, using our own freshly made masalas and freshly cut vegetables.",
    imageicon: "🌿",
    image:
      "https://img.freepik.com/free-photo/top-view-fresh-red-tomatoes-with-greens-bell-peppers-dark-background_140725-137152.jpg?size=626&ext=jpg&ga=GA1.1.1103622480.1683545544&semt=ais",
  },
  {
    id: 5,
    title: "Time-Honored Tradition",
    description:
      " Our commitment to traditional cooking techniques not only preserves nutrients but also enhances flavors.",
    imageicon: "🕰️",
    image:
      "https://img.freepik.com/free-photo/male-hands-preparing-delicious-salad_23-2148351765.jpg?w=1060&t=st=1698917780~exp=1698918380~hmac=d96e984ab5afa02ce46aae34c43e496a0f17df5bc2564b30e95cd84c104566f0.",
  },
  {
    id: 6,
    title: "Quality Assurance",
    description:
      "Rest assured, we never recycle our cooking oil, maintaining the highest quality standards.",
    imageicon: "♻️",
    image:
      "https://img.freepik.com/free-vector/waste-management-concept-illustration_114360-8795.jpg?size=626&ext=jpg&ga=GA1.1.1103622480.1683545544&semt=ais",
  },
];
