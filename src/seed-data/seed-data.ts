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

export const homePageSlicker = {
  image: "assets/Sindhus-BannerImage.webp",
  heading: "Sindhu's Kitchen",
  subHeading: "CATERING TO YOUR NEEDS",
  content:
    "Authentic South Indian Food and Snacks prepared to give you the very best in town",
};

export const WhyChooseUsData: IWhyChooseUs[] = [
  {
    id: 1,
    title: "Pure Beginnings",
    description:
      "Our culinary creations start with the purest water in all our food and snacks preparation.",
    imageicon: "🌊",
    image: "/assets/images/water.webp",
  },
  {
    id: 2,
    title: "Premium Oils",
    description:
      "Exclusively cold-pressed Sesame and Peanut oils enhance our dishes.",
    imageicon: "🥜",
    image: "/assets/images/premiumOils.webp",
  },
  {
    id: 3,
    title: "Sourced with Care",
    description:
      "We curate our dishes with premium ingredients, some specially sourced from the heart of Tamil Nadu, India.",
    imageicon: "🌾",
    image: "/assets/images/1source.webp",
  },
  {
    id: 4,
    title: "Unmatched Freshness",
    description:
      "Enjoy meals prepared on the very same day, using our own freshly made masalas and freshly cut vegetables.",
    imageicon: "🌿",
    image: "/assets/images/UnmatchedFreshness.webp",
  },
  {
    id: 5,
    title: "Time-Honored Tradition",
    description:
      " Our commitment to traditional cooking techniques not only preserves nutrients but also enhances flavors.",
    imageicon: "🕰️",
    image: "/assets/images/Time-HonoredTradition.webp",
  },
  {
    id: 6,
    title: "Quality Assurance",
    description:
      "Rest assured, we never recycle our cooking oil, maintaining the highest quality standards.",
    imageicon: "♻️",
    image: "/assets/images/qualityAssurance.webp",
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
