import { OurServicesIconEnums } from "../enums/OurServicesIconEnum";
import { ICateringPage, IOurServices } from "../interface/types";

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

export const cateringPage: ICateringPage[] = [
  {
    id: "1",
    title: "Chicken briyani",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat",

    image: "/assets/food-images-2.jpg",
    halfTray: "HalfTray - can eat 10 members",
    mediumTray: "MediumTray - can eat 20 members",
    fullTray: "FullTray - can eat 30 members",
  },
  {
    id: "2",
    title: "Veg briyani",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat",

    image: "/assets/food-img.jpg",
    halfTray: "HalfTray - can eat 10 members",
    mediumTray: "MediumTray - can eat 20 members",
    fullTray: "FullTray - can eat 30 members",
  },
  {
    id: "3",
    title: "Mutton briyani",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat",

    image: "/assets/food-img3.jpg",
    halfTray: "HalfTray - can eat 10 members",
    mediumTray: "MediumTray - can eat 20 members",
    fullTray: "FullTray - can eat 30 members",
  },
  {
    id: "4",
    title: "Fish Finger",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat",

    image: "/assets/food-img.jpg",
    halfTray: "HalfTray - can eat 10 members",
    mediumTray: "MediumTray - can eat 20 members",
    fullTray: "FullTray - can eat 30 members",
  },
];
