/**
 * Attractions Data Module
 * 
 * This module contains mock data for tourist attractions and activities
 * that users can book through the platform. It includes popular landmarks,
 * historical sites, museums, and cultural experiences.
 * 
 * Data Structure:
 * Each attraction object contains comprehensive information including:
 * - Basic info (id, name, city, country, category)
 * - Media (image URL)
 * - Pricing (adult, child, senior prices)
 * - Operational details (opening hours, duration)
 * - Features and amenities
 * - Accessibility information
 * - Booking policies and tips
 * 
 * This mock data simulates a real attractions booking platform's database
 * and provides realistic content for development and testing.
 */

/**
 * Array of attraction objects containing detailed attraction information
 * Used for displaying attraction listings, search results, and booking details
 */
export const attractions = [
  {
    id: 1,
    name: "Eiffel Tower",
    city: "Paris",
    country: "France",
    category: "Landmark",
    description: "Iconic iron lattice tower on the Champ de Mars in Paris, France. Named after engineer Gustave Eiffel, whose company designed and built the tower.",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviews: 45678,
    price: {
      adult: 26,
      child: 13,
      senior: 20,
      originalPrice: 35
    },
    duration: "2-3 hours",
    openingHours: "09:00-23:45",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
    highlights: ["Skip-the-line access", "Audio guide included", "Panoramic views", "Evening illumination"],
    included: ["Entrance ticket", "Audio guide", "Access to all levels"],
    notIncluded: ["Food and drinks", "Transportation", "Hotel pickup"],
    cancellation: "Free cancellation up to 24 hours before",
    languages: ["English", "French", "Spanish", "German", "Italian"],
    accessibility: ["Wheelchair accessible", "Elevator available"],
    bestTime: "Early morning or evening for fewer crowds",
    tips: ["Book in advance to avoid long queues", "Visit at sunset for amazing views", "Bring warm clothes for the top level"]
  },
  {
    id: 2,
    name: "Colosseum",
    city: "Rome",
    country: "Italy",
    category: "Historical Site",
    description: "Ancient amphitheater in the center of Rome, Italy. The largest ancient amphitheater ever built, and is still the largest standing amphitheater in the world.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviews: 38945,
    price: {
      adult: 16,
      child: 2,
      senior: 16,
      originalPrice: 22
    },
    duration: "2-3 hours",
    openingHours: "08:30-19:00",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    highlights: ["Skip-the-line access", "Guided tour", "Underground chambers", "Arena floor access"],
    included: ["Entrance ticket", "Professional guide", "Headsets", "Access to underground"],
    notIncluded: ["Food and drinks", "Transportation", "Hotel pickup"],
    cancellation: "Free cancellation up to 24 hours before",
    languages: ["English", "Italian", "Spanish", "French", "German"],
    accessibility: ["Wheelchair accessible", "Assistance available"],
    bestTime: "Early morning or late afternoon",
    tips: ["Book skip-the-line tickets to avoid queues", "Wear comfortable shoes", "Bring water and sunscreen"]
  },
  {
    id: 3,
    name: "Statue of Liberty",
    city: "New York",
    country: "USA",
    category: "Landmark",
    description: "Neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue was designed by French sculptor Frédéric Auguste Bartholdi.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviews: 52367,
    price: {
      adult: 24,
      child: 12,
      senior: 18,
      originalPrice: 30
    },
    duration: "3-4 hours",
    openingHours: "08:30-17:00",
    address: "Liberty Island, New York, NY 10004",
    highlights: ["Ferry ride included", "Crown access", "Ellis Island visit", "Audio tour"],
    included: ["Ferry ticket", "Audio guide", "Crown access", "Ellis Island access"],
    notIncluded: ["Food and drinks", "Hotel pickup", "Gratuities"],
    cancellation: "Free cancellation up to 24 hours before",
    languages: ["English", "Spanish", "French", "German", "Italian"],
    accessibility: ["Wheelchair accessible", "Assistance available"],
    bestTime: "Early morning for fewer crowds",
    tips: ["Book crown access in advance", "Arrive early to avoid security lines", "Bring ID for crown access"]
  },
  {
    id: 4,
    name: "Sagrada Familia",
    city: "Barcelona",
    country: "Spain",
    category: "Religious Site",
    description: "Large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Catalan architect Antoni Gaudí.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviews: 28734,
    price: {
      adult: 30,
      child: 15,
      senior: 25,
      originalPrice: 40
    },
    duration: "2-3 hours",
    openingHours: "09:00-18:00",
    address: "Carrer de Mallorca, 401, 08013 Barcelona, Spain",
    highlights: ["Skip-the-line access", "Audio guide", "Tower access", "Museum visit"],
    included: ["Entrance ticket", "Audio guide", "Tower access", "Museum access"],
    notIncluded: ["Food and drinks", "Transportation", "Hotel pickup"],
    cancellation: "Free cancellation up to 24 hours before",
    languages: ["English", "Spanish", "Catalan", "French", "German"],
    accessibility: ["Wheelchair accessible", "Assistance available"],
    bestTime: "Early morning or late afternoon",
    tips: ["Book tickets in advance", "Dress appropriately (shoulders covered)", "Visit towers for amazing views"]
  },
  {
    id: 5,
    name: "Tower Bridge",
    city: "London",
    country: "UK",
    category: "Landmark",
    description: "Combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    reviews: 15678,
    price: {
      adult: 12,
      child: 6,
      senior: 10,
      originalPrice: 16
    },
    duration: "1-2 hours",
    openingHours: "09:30-18:00",
    address: "Tower Bridge Rd, London SE1 2UP, UK",
    highlights: ["Glass floor walkway", "Victorian engine rooms", "Exhibition", "River views"],
    included: ["Entrance ticket", "Audio guide", "Glass floor access", "Engine rooms"],
    notIncluded: ["Food and drinks", "Transportation", "Hotel pickup"],
    cancellation: "Free cancellation up to 24 hours before",
    languages: ["English", "Spanish", "French", "German", "Italian"],
    accessibility: ["Wheelchair accessible", "Assistance available"],
    bestTime: "Morning for fewer crowds",
    tips: ["Check bridge lift times", "Visit on a clear day for best views", "Combine with Tower of London"]
  },
  {
    id: 6,
    name: "Machu Picchu",
    city: "Cusco",
    country: "Peru",
    category: "Historical Site",
    description: "15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. It is located in the Machupicchu District within Urubamba Province.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviews: 23456,
    price: {
      adult: 45,
      child: 25,
      senior: 40,
      originalPrice: 60
    },
    duration: "Full day",
    openingHours: "06:00-17:30",
    address: "Machu Picchu, Peru",
    highlights: ["Guided tour", "Bus transportation", "Lunch included", "Small group"],
    included: ["Entrance ticket", "Professional guide", "Bus tickets", "Lunch"],
    notIncluded: ["Hotel pickup", "Gratuities", "Personal expenses"],
    cancellation: "Free cancellation up to 48 hours before",
    languages: ["English", "Spanish", "Quechua"],
    accessibility: ["Limited wheelchair access", "Strenuous walking required"],
    bestTime: "Early morning for best photos and fewer crowds",
    tips: ["Book well in advance", "Acclimatize to altitude", "Bring water and snacks", "Wear comfortable shoes"]
  }
];

/**
 * Array of attraction categories for filtering and categorization
 * Used in attraction search filters and category selection
 */
export const attractionCategories = [
  "Landmark",
  "Historical Site", 
  "Religious Site",
  "Museum",
  "Theme Park",
  "Natural Wonder",
  "Cultural Site",
  "Adventure",
  "Food & Drink",
  "Entertainment"
];

/**
 * Array of popular cities for attraction searches
 * Used in attraction search filters and city selection
 */
export const popularCities = [
  "Paris",
  "Rome", 
  "New York",
  "Barcelona",
  "London",
  "Tokyo",
  "Amsterdam",
  "Prague",
  "Vienna",
  "Budapest"
]; 