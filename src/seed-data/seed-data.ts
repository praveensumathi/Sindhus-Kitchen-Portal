import { OurServicesIconEnums } from "../enums/OurServicesIconEnum";
import { IOurServices, ISpecials, IWhyChooseUs } from "../interface/types";

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
    image: "assets/Poster-1.jpg",
    heading: "Sindhu's Kitchen",
    subHeading: "CATERING TO YOUR NEEDS",
    content:
      "Authentic South Inidan Food and Snacks prepered to give you the Best in Town",
  },
  {
    image: "assets/food-img.jpg",
    heading: "Sindhu's Kitchen",
    subHeading: "A TASTE OF TRADITION",
    content:
      "Experience the rich and time-honored flavors of South India with our authentic dishes",
  },
  {
    image: "/assets/Poster-2.jpg",
    heading: "Sindhu's Kitchen",
    subHeading: "FLAVORS THAT DANCE ON YOUR PLATE",
    content: "Creating a memorable taste sensation with every bite",
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
      "https://img.freepik.com/premium-photo/peanut-oil-with-peanuts-isolated-white-surface_252965-909.jpg?w=996",
  },
  {
    id: 3,
    title: "Sourced with Care",
    description:
      "We curate our dishes with premium ingredients, some specially sourced from the heart of Tamil Nadu, India.",
    imageicon: "🌾",
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

export const SpeicalsData: ISpecials[] = [
  {
    id: 1,
    image: "/assets/images/mysorepak.png",
  },
  {
    id: 2,
    image: "/assets/images/sweetsandsavories.png",
  },
  {
    id: 3,
    image: "/assets/images/diwaliposter1.png",
  },
];
