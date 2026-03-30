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
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1280&h=900&fit=crop",
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
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1280&h=900&fit=crop",
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
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=1280&h=900&fit=crop",
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
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1280&h=900&fit=crop",
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
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1280&h=900&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1280&h=900&fit=crop",
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