// import ParrotImage from "./assets/images/parrot.png";
// import RabbitImage from "./assets/images/rabbit.png";
// import TurtleImage from "./assets/images/turtle.png";
import SwanImage from '../assets/images/swan.png'

const listing = {
  "listingId": "123456789",
  "petType": "Dog",
  "breed": "Golden Retriever",
  "subBreed": "N/A",
  "age": "2 years",
  "gender": "Male",
  "size": "Large",
  "weight": "70 lbs",
  "coatLength": "Long",
  "color": "Golden",
  "eyeColor": "Brown",
  "vaccinated": true,
  "neutered": false,
  "microchipped": true,
  "registrationDetails": {
    "registered": true,
    "registry": "American Kennel Club",
    "registrationNumber": "AKC12345"
  },
  "description": "Friendly and energetic Golden Retriever. Great with kids and other pets.",
  "price": 500,
  "negotiable": false,
  "location": {
    "city": "New York",
    "state": "NY",
    "country": "USA"
  },
  "sellerContactInfo": {
    "name": "John Doe",
    "phone": "555-1234",
    "email": "johndoe@example.com",
    "preferredContactTime": "Weekdays after 6pm"
  },
  "images": [
    "image1_url",
    "image2_url",
    "image3_url"
  ],
  "video": "video_url",
  "availability": "Available",
  "datePosted": "2024-03-30",
  "lastUpdated": "2024-03-29",
  "healthInformation": {
    "lastVetVisit": "2024-03-01",
    "vaccinationRecord": ["Rabies", "Distemper"],
    "knownAllergies": "None",
    "regularMedications": "None",
    "spayNeuterHistory": "Not Neutered",
    "dewormingHistory": "Last dewormed on 2024-02-15"
  },
  "temperament": "Friendly, Energetic, Good with Children",
  "trainingStatus": {
    "houseTrained": true,
    "basicCommands": true,
    "leashTrained": false,
    "crateTrained": true
  },
  "suitableFor": {
    "familiesWithChildren": true,
    "apartments": false,
    "firstTimePetOwners": true,
    "otherPets": true
  },
  "exerciseNeeds": "High",
  "dietaryPreferences": "Dry dog food, Chicken-based",
  "additionalNotes": "Requires regular exercise and grooming. Prefers a home with a yard.",
  "adoptionProcessDetails": "Interview required, Home visit, Adoption fee",
  "shippingDetails": {
    "localPickupAvailable": true,
    "shippingWithinCountry": true,
    "internationalShipping": false,
    "shippingCost": "Buyer pays shipping"
  }
}


export const PopularListings = [
  {
    id: 1,
    title: "Beautiful Swan that is ready to fly",
    description: "Hashtag Blue Bottle Williamsburg Kickstarter gluten-free mustache jean shorts.",
    image_url: "https://t3.ftcdn.net/jpg/05/65/13/64/360_F_565136491_cyBjQIFgigwxLSDR6c7QOMKXkWOulfWV.jpg",
    price: 12000,
    age: '3 month',
    category: 'Swan',
    address: 'Lahore, Punjab',
    gender: "Male",
    popular: true,
    featured: false
  },
  {
    id: 2,
    title: "Beautiful Parrot",
    description: "Hashtag Blue Bottle Williamsburg Kickstarter gluten-free mustache jean shorts.",
    image_url: "https://ichef.bbci.co.uk/images/ic/480xn/p0hhjf1l.jpg.webp",
    price: 8000,
    age: '3 month',
    category: 'Parrot',
    address: 'Lahore, Punjab',
    gender: "Female",
    popular: true,
    featured: false
  },
  {
    id: 3,
    title: "Turtle Brumation",
    description: "Hashtag Blue Bottle Williamsburg Kickstarter gluten-free mustache jean shorts.",
    image_url: "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2021/11/Turtle-brumation-pet-talk-1024x767.jpeg",
    price: 9000,
    age: '3 month',
    category: 'Turtle',
    address: 'Lahore, Punjab',
    gender: "Female",
    popular: false,
    featured: true
  },
  {
    id: 4,
    title: "Gaited Horse flying",
    description: "Hashtag Blue Bottle Williamsburg Kickstarter gluten-free mustache jean shorts.",
    image_url: "https://madbarn.ca/wp-content/uploads/2023/12/List-of-Gaited-Horse-Breeds.jpg",
    price: 334000,
    age: '3 month',
    category: 'Horse',
    address: 'Lahore, Punjab',
    gender: "Male",
    popular: true,
    featured: true
  },
  {
    id: 5,
    title: "New rainbow-colored fish",
    description: "Hashtag Blue Bottle Williamsburg Kickstarter gluten-free mustache jean shorts.",
    image_url: "https://media.cnn.com/api/v1/images/stellar/prod/220309153016-02-rose-veiled-fairy-wrasse-discovery.jpg?c=16x9&q=h_833,w_1480,c_fill",
    price: 7000,
    age: '1 month',
    category: 'Fish',
    address: 'Lahore, Punjab',
    gender: "Female",
    popular: true,
    featured: false
  },
  {
    id: 6,
    title: "Cute rabbit survey uncovers",
    description: "Hashtag Blue Bottle Williamsburg Kickstarter gluten-free mustache jean shorts.",
    image_url: "https://www.ntu.ac.uk/__data/assets/image/0035/884573/Otis-Havana.jpg",
    price: 7600,
    age: '4 month',
    category: 'Rabbit',
    address: 'Lahore, Punjab',
    gender: "Male",
    popular: true,
    featured: false
  },
]


export default {
  PopularListings,
}