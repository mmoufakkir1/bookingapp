/**
 * Featured Destinations Data Module
 * 
 * This module contains data for featured destinations/cities that are
 * displayed on the home page to encourage user exploration and bookings.
 * 
 * Data Structure:
 * Each destination object contains:
 * - City name and location
 * - Property count for that destination
 * - Image URL for the destination
 * - Alt text for accessibility
 * 
 * This data is used by the Featured component to display
 * popular travel destinations with their property counts.
 */

/**
 * Array of featured destination objects containing city information
 * Used for displaying featured destinations on the home page
 */
export const featuredDestinations = [
  {
    id: 1,
    city: "Dublin",
    country: "Ireland",
    propertyCount: 123,
    image: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    alt: "Dublin cityscape"
  },
  {
    id: 2,
    city: "Reno",
    country: "USA",
    propertyCount: 533,
    image: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    alt: "Reno cityscape"
  },
  {
    id: 3,
    city: "Austin",
    country: "USA",
    propertyCount: 532,
    image: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    alt: "Austin cityscape"
  }
]; 