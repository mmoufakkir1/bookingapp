/**
 * Car Rentals Data Module
 * 
 * This module contains mock data for car rental services including:
 * - Car rental listings with detailed information
 * - Vehicle specifications and features
 * - Pricing information for different rental periods
 * - Insurance options and costs
 * - Company information and ratings
 * 
 * Data Structure:
 * Each car rental object contains comprehensive information including:
 * - Company details (name, code, logo, rating)
 * - Location information (city, airport, address, pickup times)
 * - Vehicle specifications (type, model, year, features)
 * - Pricing structure (daily, weekly, monthly rates)
 * - Insurance options and costs
 * - Availability and booking information
 * 
 * This mock data simulates a real car rental platform's database
 * and provides realistic content for development and testing.
 */

/**
 * Array of car rental objects containing detailed rental information
 * Used for displaying car rental listings, search results, and booking details
 */
export const carRentals = [
  {
    id: 1,
    company: "Hertz",
    companyCode: "HTZ",
    location: {
      city: "New York",
      airport: "JFK",
      address: "JFK Airport Terminal 4",
      pickupTime: "08:00-22:00"
    },
    vehicle: {
      type: "Economy",
      model: "Toyota Corolla",
      year: 2023,
      transmission: "Automatic",
      fuelType: "Gasoline",
      seats: 5,
      doors: 4,
      ac: true,
      mileage: "Unlimited",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    price: {
      daily: 45,
      weekly: 280,
      monthly: 1100,
      originalDaily: 60,
      originalWeekly: 380,
      originalMonthly: 1500
    },
    features: ["GPS", "Bluetooth", "Backup Camera", "USB Charging", "Free Cancellation"],
    insurance: {
      basic: 15,
      premium: 25,
      full: 35
    },
    rating: 4.2,
    reviews: 1247,
    available: true,
    logo: "Hertz"
  },
  {
    id: 2,
    company: "Enterprise",
    companyCode: "ENT",
    location: {
      city: "Los Angeles",
      airport: "LAX",
      address: "LAX Airport Terminal 1",
      pickupTime: "06:00-24:00"
    },
    vehicle: {
      type: "SUV",
      model: "Honda CR-V",
      year: 2023,
      transmission: "Automatic",
      fuelType: "Gasoline",
      seats: 5,
      doors: 5,
      ac: true,
      mileage: "Unlimited",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1000&h=600&fit=crop"
    },
    price: {
      daily: 65,
      weekly: 400,
      monthly: 1600,
      originalDaily: 85,
      originalWeekly: 520,
      originalMonthly: 2100
    },
    features: ["GPS", "Bluetooth", "Backup Camera", "USB Charging", "Free Cancellation", "All-Wheel Drive"],
    insurance: {
      basic: 18,
      premium: 28,
      full: 38
    },
    rating: 4.4,
    reviews: 2156,
    available: true,
    logo: "Enterprise"
  },
  {
    id: 3,
    company: "Avis",
    companyCode: "AVS",
    location: {
      city: "London",
      airport: "LHR",
      address: "Heathrow Airport Terminal 3",
      pickupTime: "07:00-23:00"
    },
    vehicle: {
      type: "Luxury",
      model: "BMW 3 Series",
      year: 2023,
      transmission: "Automatic",
      fuelType: "Gasoline",
      seats: 5,
      doors: 4,
      ac: true,
      mileage: "Unlimited",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1000&h=600&fit=crop"
    },
    price: {
      daily: 95,
      weekly: 580,
      monthly: 2200,
      originalDaily: 120,
      originalWeekly: 720,
      originalMonthly: 2800
    },
    features: ["GPS", "Bluetooth", "Backup Camera", "USB Charging", "Free Cancellation", "Leather Seats", "Premium Sound"],
    insurance: {
      basic: 20,
      premium: 35,
      full: 50
    },
    rating: 4.6,
    reviews: 892,
    available: true,
    logo: "Avis"
  },
  {
    id: 4,
    company: "Budget",
    companyCode: "BDG",
    location: {
      city: "Paris",
      airport: "CDG",
      address: "Charles de Gaulle Airport Terminal 2",
      pickupTime: "08:00-22:00"
    },
    vehicle: {
      type: "Compact",
      model: "Renault Clio",
      year: 2023,
      transmission: "Manual",
      fuelType: "Diesel",
      seats: 5,
      doors: 5,
      ac: true,
      mileage: "Unlimited",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1000&h=600&fit=crop"
    },
    price: {
      daily: 35,
      weekly: 210,
      monthly: 800,
      originalDaily: 45,
      originalWeekly: 270,
      originalMonthly: 1000
    },
    features: ["GPS", "Bluetooth", "USB Charging", "Free Cancellation"],
    insurance: {
      basic: 12,
      premium: 20,
      full: 28
    },
    rating: 4.1,
    reviews: 1567,
    available: true,
    logo: "Budget"
  },
  {
    id: 5,
    company: "Sixt",
    companyCode: "SXT",
    location: {
      city: "Berlin",
      airport: "BER",
      address: "Berlin Brandenburg Airport Terminal 1",
      pickupTime: "06:00-24:00"
    },
    vehicle: {
      type: "Electric",
      model: "Tesla Model 3",
      year: 2023,
      transmission: "Automatic",
      fuelType: "Electric",
      seats: 5,
      doors: 4,
      ac: true,
      mileage: "Unlimited",
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=1000&h=600&fit=crop"
    },
    price: {
      daily: 85,
      weekly: 520,
      monthly: 2000,
      originalDaily: 110,
      originalWeekly: 660,
      originalMonthly: 2500
    },
    features: ["GPS", "Bluetooth", "Backup Camera", "USB Charging", "Free Cancellation", "Autopilot", "Supercharger Access"],
    insurance: {
      basic: 18,
      premium: 30,
      full: 45
    },
    rating: 4.5,
    reviews: 743,
    available: true,
    logo: "Sixt"
  },
  {
    id: 6,
    company: "Europcar",
    companyCode: "EUR",
    location: {
      city: "Madrid",
      airport: "MAD",
      address: "Madrid Barajas Airport Terminal 4",
      pickupTime: "07:00-23:00"
    },
    vehicle: {
      type: "Van",
      model: "Ford Transit",
      year: 2023,
      transmission: "Manual",
      fuelType: "Diesel",
      seats: 9,
      doors: 5,
      ac: true,
      mileage: "Unlimited",
      image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=1000&h=600&fit=crop"
    },
    price: {
      daily: 75,
      weekly: 450,
      monthly: 1800,
      originalDaily: 95,
      originalWeekly: 570,
      originalMonthly: 2200
    },
    features: ["GPS", "Bluetooth", "Backup Camera", "USB Charging", "Free Cancellation", "Spacious Interior"],
    insurance: {
      basic: 20,
      premium: 32,
      full: 45
    },
    rating: 4.3,
    reviews: 1123,
    available: true,
    logo: "Europcar"
  }
];

/**
 * Array of popular car rental companies for filtering and selection
 * Used in car rental search filters and company selection
 */
export const carRentalCompanies = [
  "Hertz",
  "Enterprise",
  "Avis",
  "Budget",
  "Sixt",
  "Alamo",
  "National",
  "Thrifty",
  "Dollar",
  "Europcar"
];

/**
 * Array of vehicle types for filtering and categorization
 * Used in car rental search filters and vehicle type selection
 */
export const vehicleTypes = [
  "Economy",
  "Compact",
  "Midsize",
  "Full-size",
  "SUV",
  "Luxury",
  "Electric",
  "Hybrid",
  "Van",
  "Truck"
];

/**
 * Array of common car features for filtering and display
 * Used for displaying vehicle features and filtering options
 */
export const carFeatures = [
  "GPS",
  "Bluetooth",
  "Backup Camera",
  "USB Charging",
  "Free Cancellation",
  "All-Wheel Drive",
  "Leather Seats",
  "Premium Sound",
  "Autopilot",
  "Supercharger Access",
  "Child Seat",
  "Roof Rack"
]; 