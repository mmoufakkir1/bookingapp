/**
 * Airport Taxis Data Module
 * 
 * This module contains mock data for airport taxi and transportation services
 * that users can book for airport transfers. It includes various taxi companies,
 * ride-sharing services, and private transfer options.
 * 
 * Data Structure:
 * Each airport taxi object contains comprehensive information including:
 * - Company details (name, code, logo, rating)
 * - Location information (city, airport, terminal, pickup point)
 * - Vehicle specifications (type, model, capacity, features)
 * - Pricing structure (rates to different destinations)
 * - Service features and amenities
 * - Booking policies and payment methods
 * - Language support and accessibility options
 * 
 * This mock data simulates a real airport transportation platform's database
 * and provides realistic content for development and testing.
 */

/**
 * Array of airport taxi objects containing detailed transportation information
 * Used for displaying airport taxi listings, search results, and booking details
 */
export const airportTaxis = [
  {
    id: 1,
    company: "Yellow Cab",
    companyCode: "YEL",
    location: {
      city: "New York",
      airport: "JFK",
      terminal: "All Terminals",
      pickupPoint: "Ground Transportation Center"
    },
    vehicle: {
      type: "Standard",
      model: "Toyota Camry",
      capacity: 4,
      luggage: 3,
      features: ["Air Conditioning", "GPS", "Credit Card Payment", "Child Seat Available"]
    },
    price: {
      toManhattan: 52,
      toBrooklyn: 45,
      toQueens: 35,
      toBronx: 48,
      toStatenIsland: 65,
      originalPrice: 65
    },
    waitTime: "5-10 minutes",
    rating: 4.3,
    reviews: 8923,
    available: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/New_York_City_Taxi_cab.svg/1200px-New_York_City_Taxi_cab.svg.png",
    highlights: ["24/7 service", "Fixed rates", "No hidden fees", "Professional drivers"],
    included: ["Meet & greet", "Flight tracking", "Free waiting time", "All taxes"],
    notIncluded: ["Tolls", "Parking fees", "Gratuities"],
    cancellation: "Free cancellation up to 2 hours before pickup",
    paymentMethods: ["Cash", "Credit Card", "Mobile Payment"],
    languages: ["English", "Spanish", "French", "German"]
  },
  {
    id: 2,
    company: "Uber",
    companyCode: "UBR",
    location: {
      city: "Los Angeles",
      airport: "LAX",
      terminal: "All Terminals",
      pickupPoint: "LAX-it lot"
    },
    vehicle: {
      type: "UberX",
      model: "Honda Civic",
      capacity: 4,
      luggage: 2,
      features: ["Air Conditioning", "GPS", "App-based booking", "Real-time tracking"]
    },
    price: {
      toDowntown: 35,
      toHollywood: 28,
      toSantaMonica: 32,
      toVenice: 30,
      toBeverlyHills: 25,
      originalPrice: 45
    },
    waitTime: "3-8 minutes",
    rating: 4.5,
    reviews: 15678,
    available: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png",
    highlights: ["App-based booking", "Real-time tracking", "Multiple vehicle options", "Cashless payment"],
    included: ["Meet & greet", "Flight tracking", "Free waiting time", "All taxes"],
    notIncluded: ["Tolls", "Parking fees", "Gratuities"],
    cancellation: "Free cancellation up to 1 hour before pickup",
    paymentMethods: ["Credit Card", "Mobile Payment", "Uber Cash"],
    languages: ["English", "Spanish", "French", "German", "Chinese"]
  },
  {
    id: 3,
    company: "Black Cab",
    companyCode: "BLK",
    location: {
      city: "London",
      airport: "LHR",
      terminal: "All Terminals",
      pickupPoint: "Official taxi rank"
    },
    vehicle: {
      type: "Traditional",
      model: "LEVC TX",
      capacity: 6,
      luggage: 4,
      features: ["Air Conditioning", "GPS", "Contactless Payment", "Wheelchair Accessible"]
    },
    price: {
      toCentralLondon: 45,
      toWestminster: 42,
      toCamden: 48,
      toGreenwich: 52,
      toRichmond: 38,
      originalPrice: 60
    },
    waitTime: "5-15 minutes",
    rating: 4.7,
    reviews: 7234,
    available: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/London_taxi_cab.svg/1200px-London_taxi_cab.svg.png",
    highlights: ["Knowledge test certified drivers", "Fixed rates", "Contactless payment", "Wheelchair accessible"],
    included: ["Meet & greet", "Flight tracking", "Free waiting time", "All taxes"],
    notIncluded: ["Congestion charge", "Parking fees", "Gratuities"],
    cancellation: "Free cancellation up to 2 hours before pickup",
    paymentMethods: ["Cash", "Credit Card", "Contactless", "Mobile Payment"],
    languages: ["English", "French", "German", "Spanish", "Italian"]
  },
  {
    id: 4,
    company: "G7 Taxi",
    companyCode: "G7",
    location: {
      city: "Paris",
      airport: "CDG",
      terminal: "All Terminals",
      pickupPoint: "Official taxi rank"
    },
    vehicle: {
      type: "Standard",
      model: "Peugeot 508",
      capacity: 4,
      luggage: 3,
      features: ["Air Conditioning", "GPS", "Credit Card Payment", "Child Seat Available"]
    },
    price: {
      toCentralParis: 55,
      toEiffelTower: 58,
      toLouvre: 52,
      toMontmartre: 62,
      toChampsElysees: 56,
      originalPrice: 70
    },
    waitTime: "5-12 minutes",
    rating: 4.4,
    reviews: 5678,
    available: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/G7_Taxi_logo.svg/1200px-G7_Taxi_logo.svg.png",
    highlights: ["Fixed rates", "Professional drivers", "24/7 service", "Flight tracking"],
    included: ["Meet & greet", "Flight tracking", "Free waiting time", "All taxes"],
    notIncluded: ["Tolls", "Parking fees", "Gratuities"],
    cancellation: "Free cancellation up to 2 hours before pickup",
    paymentMethods: ["Cash", "Credit Card", "Mobile Payment"],
    languages: ["French", "English", "Spanish", "German", "Italian"]
  },
  {
    id: 5,
    company: "Free Now",
    companyCode: "FRN",
    location: {
      city: "Berlin",
      airport: "BER",
      terminal: "All Terminals",
      pickupPoint: "Official taxi rank"
    },
    vehicle: {
      type: "Standard",
      model: "Mercedes E-Class",
      capacity: 4,
      luggage: 3,
      features: ["Air Conditioning", "GPS", "App-based booking", "Real-time tracking"]
    },
    price: {
      toCentralBerlin: 42,
      toBrandenburgGate: 45,
      toCheckpointCharlie: 40,
      toAlexanderplatz: 38,
      toPotsdamerPlatz: 43,
      originalPrice: 55
    },
    waitTime: "3-10 minutes",
    rating: 4.6,
    reviews: 4234,
    available: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Free_Now_logo.svg/1200px-Free_Now_logo.svg.png",
    highlights: ["App-based booking", "Real-time tracking", "Multiple vehicle options", "Cashless payment"],
    included: ["Meet & greet", "Flight tracking", "Free waiting time", "All taxes"],
    notIncluded: ["Tolls", "Parking fees", "Gratuities"],
    cancellation: "Free cancellation up to 1 hour before pickup",
    paymentMethods: ["Credit Card", "Mobile Payment", "PayPal"],
    languages: ["German", "English", "French", "Spanish", "Turkish"]
  },
  {
    id: 6,
    company: "MyTaxi",
    companyCode: "MTX",
    location: {
      city: "Madrid",
      airport: "MAD",
      terminal: "All Terminals",
      pickupPoint: "Official taxi rank"
    },
    vehicle: {
      type: "Standard",
      model: "Toyota Prius",
      capacity: 4,
      luggage: 3,
      features: ["Air Conditioning", "GPS", "App-based booking", "Hybrid vehicle"]
    },
    price: {
      toCentralMadrid: 30,
      toPlazaMayor: 32,
      toRetiroPark: 28,
      toGranVia: 31,
      toPuertaDelSol: 29,
      originalPrice: 40
    },
    waitTime: "3-8 minutes",
    rating: 4.5,
    reviews: 3456,
    available: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MyTaxi_logo.svg/1200px-MyTaxi_logo.svg.png",
    highlights: ["App-based booking", "Hybrid vehicles", "Fixed rates", "Professional drivers"],
    included: ["Meet & greet", "Flight tracking", "Free waiting time", "All taxes"],
    notIncluded: ["Tolls", "Parking fees", "Gratuities"],
    cancellation: "Free cancellation up to 1 hour before pickup",
    paymentMethods: ["Credit Card", "Mobile Payment", "PayPal"],
    languages: ["Spanish", "English", "French", "German", "Italian"]
  }
];

/**
 * Array of popular taxi companies for filtering and selection
 * Used in airport taxi search filters and company selection
 */
export const taxiCompanies = [
  "Yellow Cab",
  "Uber",
  "Black Cab",
  "G7 Taxi",
  "Free Now",
  "MyTaxi",
  "Lyft",
  "Bolt",
  "Gett",
  "Cabify"
];

/**
 * Array of vehicle types for airport transportation
 * Used in airport taxi search filters and vehicle type selection
 */
export const vehicleTypes = [
  "Standard",
  "Premium",
  "SUV",
  "Van",
  "Luxury",
  "Electric",
  "Hybrid",
  "Wheelchair Accessible"
];

/**
 * Array of common features for airport taxi services
 * Used for displaying service features and filtering options
 */
export const taxiFeatures = [
  "Air Conditioning",
  "GPS",
  "Credit Card Payment",
  "Child Seat Available",
  "App-based booking",
  "Real-time tracking",
  "Contactless Payment",
  "Wheelchair Accessible",
  "Meet & greet",
  "Flight tracking",
  "Free waiting time",
  "Fixed rates"
]; 