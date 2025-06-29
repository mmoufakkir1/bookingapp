/**
 * Hotels Data Module
 * 
 * This module contains mock data for the booking application including:
 * - Hotel listings with detailed information
 * - Available cities for search functionality
 * - Property types for filtering
 * - Common amenities for property features
 * 
 * Data Structure:
 * Each hotel object contains comprehensive information including:
 * - Basic info (id, name, type, city, address, distance)
 * - Media (photos array)
 * - Pricing (cheapestPrice, originalPrice)
 * - Ratings and reviews
 * - Detailed room information
 * - Hotel policies and amenities
 * - Special highlights and features
 * 
 * This mock data simulates a real booking platform's database
 * and provides realistic content for development and testing.
 */

/**
 * Array of hotel objects containing detailed property information
 * Used for displaying hotel listings, search results, and property details
 */
export const hotels = [
  {
    id: 1,
    name: "Tower Street Apartments",
    type: "Apartment",
    city: "New York",
    address: "Elton St 125, New York, NY 10001",
    distance: "500m from center",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    ],
    title: "Stay in the heart of City",
    desc: "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer.",
    rating: 8.9,
    cheapestPrice: 112,
    originalPrice: 140,
    featured: true,
    amenities: ["WiFi", "Air conditioning", "Kitchen", "Free cancellation", "Airport taxi"],
    roomTypes: [
      {
        id: 1,
        name: "Studio Apartment",
        desc: "Entire studio • 1 bathroom • 21m² 1 full bed",
        price: 112,
        originalPrice: 140,
        capacity: 2,
        features: ["Air conditioning", "Kitchen", "WiFi", "Private bathroom"]
      },
      {
        id: 2,
        name: "Deluxe Studio",
        desc: "Entire studio • 1 bathroom • 25m² 1 queen bed",
        price: 135,
        originalPrice: 170,
        capacity: 2,
        features: ["Air conditioning", "Kitchen", "WiFi", "Private bathroom", "City view"]
      }
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation until 24 hours before check-in",
      children: "Children of all ages are welcome",
      pets: "Pets are not allowed"
    },
    highlights: [
      "Excellent location – 500m from center",
      "Book a stay over $114 at this property and get a free airport taxi",
      "Limited time deal - 20% off"
    ]
  },
  {
    id: 2,
    name: "Comfort Suites Airport",
    type: "Hotel",
    city: "Austin",
    address: "123 Airport Blvd, Austin, TX 78719",
    distance: "1.2km from airport",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3cedb43aa7fbc0a9752666a32d9b153468e20e9032&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955390.jpg?k=9c4091635712b93d180402e86d9f59acfce0a50c65c48e3c13e8f578f36fdd1a&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955399.jpg?k=4c7c5a6c49e94c0fcc369c8a84fbaa3982d02bff0d8cce84a459e3d44183cd14&o=&hp=1",
    ],
    title: "Comfortable stay near airport",
    desc: "Located near Austin-Bergstrom International Airport, this hotel offers comfortable accommodations with free shuttle service to the airport. Features include a fitness center, outdoor pool, and complimentary breakfast.",
    rating: 8.5,
    cheapestPrice: 89,
    originalPrice: 120,
    featured: false,
    amenities: ["Free WiFi", "Airport shuttle", "Breakfast included", "Fitness center", "Pool"],
    roomTypes: [
      {
        id: 1,
        name: "Standard King Room",
        desc: "1 king bed • 1 bathroom • 28m²",
        price: 89,
        originalPrice: 120,
        capacity: 2,
        features: ["King bed", "Free WiFi", "Breakfast included", "Air conditioning"]
      },
      {
        id: 2,
        name: "Suite with Sofa Bed",
        desc: "1 king bed • 1 sofa bed • 1 bathroom • 35m²",
        price: 115,
        originalPrice: 150,
        capacity: 4,
        features: ["King bed", "Sofa bed", "Free WiFi", "Breakfast included", "Separate living area"]
      }
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation until 48 hours before check-in",
      children: "Children of all ages are welcome",
      pets: "Pets allowed for $25 per night"
    },
    highlights: [
      "Free airport shuttle",
      "Member price available",
      "Breakfast included"
    ]
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    type: "Hotel",
    city: "London",
    address: "10 Trinity Square, London EC3N 4AJ",
    distance: "200m from Tower Bridge",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658545.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658552.jpg?k=6ac6d0afd28e4ce00a8fcecc209556ed466d9ecd18bd3f8338e6c63c4e268450&o=&hp=1",
    ],
    title: "Luxury in the heart of London",
    desc: "Experience luxury at its finest in this 5-star hotel located in the historic Trinity Square. Enjoy world-class dining, spa services, and stunning views of the Tower of London and Tower Bridge.",
    rating: 9.2,
    cheapestPrice: 450,
    originalPrice: 600,
    featured: true,
    amenities: ["Spa", "Restaurant", "Room service", "Concierge", "Valet parking", "Free WiFi"],
    roomTypes: [
      {
        id: 1,
        name: "Deluxe Room",
        desc: "1 king bed • 1 bathroom • 40m² • City view",
        price: 450,
        originalPrice: 600,
        capacity: 2,
        features: ["King bed", "City view", "Marble bathroom", "Room service", "Free WiFi"]
      },
      {
        id: 2,
        name: "Executive Suite",
        desc: "1 king bed • 1 living room • 1 bathroom • 60m² • River view",
        price: 750,
        originalPrice: 1000,
        capacity: 2,
        features: ["King bed", "River view", "Separate living room", "Butler service", "Free WiFi"]
      }
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation until 72 hours before check-in",
      children: "Children of all ages are welcome",
      pets: "Pets allowed for $50 per night"
    },
    highlights: [
      "5-star luxury hotel",
      "Prime location near Tower Bridge",
      "Spa and wellness center"
    ]
  },
  {
    id: 4,
    name: "Hilton Garden Inn",
    type: "Hotel",
    city: "Miami",
    address: "1450 NW 42nd Ave, Miami, FL 33126",
    distance: "800m from airport",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    ],
    title: "Convenient airport hotel",
    desc: "Located near Miami International Airport, this hotel offers comfortable accommodations with easy access to downtown Miami and South Beach. Features include a restaurant, fitness center, and outdoor pool.",
    rating: 8.1,
    cheapestPrice: 95,
    originalPrice: 130,
    featured: false,
    amenities: ["Free WiFi", "Restaurant", "Fitness center", "Pool", "Airport shuttle"],
    roomTypes: [
      {
        id: 1,
        name: "Standard Room",
        desc: "1 king bed • 1 bathroom • 30m²",
        price: 95,
        originalPrice: 130,
        capacity: 2,
        features: ["King bed", "Free WiFi", "Air conditioning", "Work desk"]
      }
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation until 24 hours before check-in",
      children: "Children of all ages are welcome",
      pets: "Pets not allowed"
    },
    highlights: [
      "Close to Miami International Airport",
      "Free airport shuttle",
      "Restaurant on-site"
    ]
  },
  {
    id: 5,
    name: "Aparthotel Stare Miasto",
    type: "Apartment",
    city: "Madrid",
    address: "Calle Mayor 15, 28013 Madrid",
    distance: "300m from Plaza Mayor",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    ],
    title: "Historic charm in Old Town",
    desc: "Located in the heart of Madrid's historic center, this aparthotel offers modern amenities in a historic building. Just steps from Plaza Mayor and Puerta del Sol, it's perfect for exploring the city.",
    rating: 8.7,
    cheapestPrice: 120,
    originalPrice: 160,
    featured: true,
    amenities: ["WiFi", "Kitchen", "Air conditioning", "Free cancellation", "City center location"],
    roomTypes: [
      {
        id: 1,
        name: "Studio Apartment",
        desc: "Entire studio • 1 bathroom • 25m² • 1 double bed",
        price: 120,
        originalPrice: 160,
        capacity: 2,
        features: ["Double bed", "Kitchen", "WiFi", "Air conditioning", "City view"]
      },
      {
        id: 2,
        name: "One-Bedroom Apartment",
        desc: "Entire apartment • 1 bedroom • 1 bathroom • 35m² • 1 double bed + 1 sofa bed",
        price: 150,
        originalPrice: 200,
        capacity: 4,
        features: ["Double bed", "Sofa bed", "Kitchen", "WiFi", "Air conditioning", "Separate bedroom"]
      }
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation until 48 hours before check-in",
      children: "Children of all ages are welcome",
      pets: "Pets allowed for €20 per night"
    },
    highlights: [
      "Historic building in Old Town",
      "Steps from Plaza Mayor",
      "Fully equipped kitchen"
    ]
  }
];

/**
 * Array of available cities for search functionality
 * Used in the header component's destination autocomplete feature
 */
export const cities = [
  "New York",
  "Austin", 
  "London",
  "Miami",
  "Madrid",
  "Paris",
  "Tokyo",
  "Sydney",
  "Berlin",
  "Rome",
  "Barcelona",
  "Amsterdam",
  "Prague",
  "Vienna",
  "Budapest"
];

/**
 * Array of property types for filtering and categorization
 * Used in property type browsing and search filters
 */
export const propertyTypes = [
  "Hotels",
  "Apartments", 
  "Resorts",
  "Villas",
  "Hostels",
  "Guest houses",
  "Holiday homes",
  "Campsites"
];

/**
 * Array of common amenities for property features
 * Used for displaying property amenities and filtering options
 */
export const amenities = [
  "WiFi",
  "Air conditioning",
  "Kitchen",
  "Free cancellation",
  "Airport taxi",
  "Breakfast included",
  "Fitness center",
  "Pool",
  "Spa",
  "Restaurant",
  "Room service",
  "Concierge",
  "Valet parking",
  "Pet friendly"
]; 