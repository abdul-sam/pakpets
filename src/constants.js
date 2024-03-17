import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import CatImage from "./assets/images/cat.png";
import ChinchillaImage from "./assets/images/chinchilla.png";
import DogImage from "./assets/images/dog.png";
import FerretImage from "./assets/images/ferret.png";
import FishImage from "./assets/images/fish.png";
import HorseImage from "./assets/images/horse.png";
import ParrotImage from "./assets/images/parrot.png";
import RabbitImage from "./assets/images/rabbit.png";
import TurtleImage from "./assets/images/turtle.png";
import SwanImage from "./assets/images/swan.png";

export const CategoriesDropdownList = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

export const SellMenuItems = [
  { 
    title: "Sell Your Pet", 
    description: "Sell your pet to a loving home",
    icon: SquaresPlusIcon,
  },
  { 
    title: "Sell Pet Food", 
    description: "Sell pet food to pet owners",
    icon: UserGroupIcon,
  },
]

export const PopularSearches = [
  { 
    title: "Cat", 
  },
  { 
    title: "Parrot", 
  },
  {
    title: "Dog",
  },
  {
    title: "Fish",
  },
  {
    title: "Rabbit",
  },
  {
    title: "Turtle",  
  }
]

export const PopularCategories = [
  { 
    name: "Cat",
    image_url: CatImage,
    total_ads: 12
  },
  {
    name: "Chinchilla",
    image_url: ChinchillaImage,
    total_ads: 2
  },
  { 
    name: "Swan",
    image_url: SwanImage,
    total_ads: 15 
  },
  { 
    name: "Ferret",
    image_url: FerretImage,
    total_ads: 4
  },
  { 
    name: "Parrot",
    image_url: ParrotImage,
    total_ads: 25 
  },
  { 
    name: "Dog",
    image_url: DogImage,
    total_ads: 14
  },
  { 
    name: "Fish",
    image_url: FishImage,
    total_ads: 8
  },
  { 
    name: "Rabbit",
    image_url: RabbitImage,
    total_ads: 17 
  },
  { 
    name: "Turtle",
    image_url: TurtleImage,
    total_ads: 4
  },
  { 
    name: "Horse",
    image_url: HorseImage,
    total_ads: 20 
  }
]



export default {
  CategoriesDropdownList,
  SellMenuItems,
  PopularSearches,
  PopularCategories,
}