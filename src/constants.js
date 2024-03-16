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

export default {
  CategoriesDropdownList,
  SellMenuItems,
  PopularSearches,
}