/**
 * Flights Data Module
 * 
 * This module contains mock data for flight bookings including:
 * - Flight listings with detailed information
 * - Popular flight routes with average prices
 * - Available airlines for filtering
 * 
 * Data Structure:
 * Each flight object contains comprehensive information including:
 * - Airline details (name, code, logo)
 * - Flight information (number, aircraft, duration)
 * - Departure and arrival details (city, airport, time, date)
 * - Pricing and availability
 * - Amenities and policies
 * 
 * This mock data simulates a real flight booking platform's database
 * and provides realistic content for development and testing.
 */

/**
 * Array of flight objects containing detailed flight information
 * Used for displaying flight listings, search results, and booking details
 */
export const flights = [
  {
    id: 1,
    airline: "Delta Airlines",
    airlineCode: "DL",
    flightNumber: "DL1234",
    departure: {
      city: "New York",
      airport: "JFK",
      time: "08:30",
      date: "2024-01-15"
    },
    arrival: {
      city: "London",
      airport: "LHR",
      time: "20:45",
      date: "2024-01-15"
    },
    duration: "7h 15m",
    stops: 0,
    price: 450,
    originalPrice: 600,
    class: "Economy",
    seats: 156,
    availableSeats: 23,
    aircraft: "Boeing 777",
    amenities: ["WiFi", "Entertainment", "Meal", "USB Charging"],
    cancellation: "Free cancellation until 24h before departure",
    refundable: true,
    logo: "Delta",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    airline: "American Airlines",
    airlineCode: "AA",
    flightNumber: "AA5678",
    departure: {
      city: "Los Angeles",
      airport: "LAX",
      time: "10:15",
      date: "2024-01-15"
    },
    arrival: {
      city: "Tokyo",
      airport: "NRT",
      time: "14:30",
      date: "2024-01-16"
    },
    duration: "11h 15m",
    stops: 0,
    price: 780,
    originalPrice: 950,
    class: "Economy",
    seats: 180,
    availableSeats: 45,
    aircraft: "Boeing 787",
    amenities: ["WiFi", "Entertainment", "Meal", "USB Charging", "Power Outlet"],
    cancellation: "Free cancellation until 48h before departure",
    refundable: true,
    logo: "American",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    airline: "British Airways",
    airlineCode: "BA",
    flightNumber: "BA9012",
    departure: {
      city: "London",
      airport: "LHR",
      time: "14:20",
      date: "2024-01-15"
    },
    arrival: {
      city: "Paris",
      airport: "CDG",
      time: "17:35",
      date: "2024-01-15"
    },
    duration: "1h 15m",
    stops: 0,
    price: 120,
    originalPrice: 180,
    class: "Economy",
    seats: 120,
    availableSeats: 67,
    aircraft: "Airbus A320",
    amenities: ["WiFi", "Entertainment", "Snack"],
    cancellation: "Free cancellation until 2h before departure",
    refundable: true,
    logo: "British Airways",
    image: "https://images.unsplash.com/photo-1506012787146-92ac18addd60?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    airline: "Lufthansa",
    airlineCode: "LH",
    flightNumber: "LH3456",
    departure: {
      city: "Berlin",
      airport: "BER",
      time: "09:45",
      date: "2024-01-15"
    },
    arrival: {
      city: "Madrid",
      airport: "MAD",
      time: "12:30",
      date: "2024-01-15"
    },
    duration: "2h 45m",
    stops: 0,
    price: 95,
    originalPrice: 140,
    class: "Economy",
    seats: 150,
    availableSeats: 89,
    aircraft: "Airbus A321",
    amenities: ["WiFi", "Entertainment", "Meal"],
    cancellation: "Free cancellation until 24h before departure",
    refundable: true,
    logo: "Lufthansa",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    airline: "Emirates",
    airlineCode: "EK",
    flightNumber: "EK7890",
    departure: {
      city: "Dubai",
      airport: "DXB",
      time: "02:15",
      date: "2024-01-15"
    },
    arrival: {
      city: "Sydney",
      airport: "SYD",
      time: "22:45",
      date: "2024-01-15"
    },
    duration: "13h 30m",
    stops: 0,
    price: 890,
    originalPrice: 1200,
    class: "Economy",
    seats: 200,
    availableSeats: 34,
    aircraft: "Airbus A380",
    amenities: ["WiFi", "Entertainment", "Meal", "USB Charging", "Power Outlet", "Shower"],
    cancellation: "Free cancellation until 72h before departure",
    refundable: true,
    logo: "Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    airline: "United Airlines",
    airlineCode: "UA",
    flightNumber: "UA2345",
    departure: {
      city: "Chicago",
      airport: "ORD",
      time: "16:30",
      date: "2024-01-15"
    },
    arrival: {
      city: "Miami",
      airport: "MIA",
      time: "20:15",
      date: "2024-01-15"
    },
    duration: "2h 45m",
    stops: 0,
    price: 180,
    originalPrice: 250,
    class: "Economy",
    seats: 140,
    availableSeats: 56,
    aircraft: "Boeing 737",
    amenities: ["WiFi", "Entertainment", "Snack"],
    cancellation: "Free cancellation until 24h before departure",
    refundable: true,
    logo: "United",
    image: "https://images.unsplash.com/photo-1520437358207-323b43b50729?w=400&h=300&fit=crop"
  }
];

/**
 * Array of popular flight routes with average prices
 * Used for displaying trending routes and price comparisons
 */
export const popularRoutes = [
  { from: "New York", to: "London", avgPrice: 450 },
  { from: "Los Angeles", to: "Tokyo", avgPrice: 780 },
  { from: "London", to: "Paris", avgPrice: 120 },
  { from: "Berlin", to: "Madrid", avgPrice: 95 },
  { from: "Dubai", to: "Sydney", avgPrice: 890 },
  { from: "Chicago", to: "Miami", avgPrice: 180 }
];

/**
 * Array of available airlines for filtering and selection
 * Used in flight search filters and airline selection
 */
export const airlines = [
  "Delta Airlines",
  "American Airlines", 
  "British Airways",
  "Lufthansa",
  "Emirates",
  "United Airlines",
  "Air France",
  "KLM",
  "Qatar Airways",
  "Singapore Airlines"
]; 