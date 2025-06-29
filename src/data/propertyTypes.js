/**
 * Property Types Data Module
 * 
 * This module contains data for different property types that are
 * displayed in the property browsing section of the home page.
 * 
 * Data Structure:
 * Each property type object contains:
 * - Property type name
 * - Property count for that type
 * - Image URL for the property type
 * - Alt text for accessibility
 * 
 * This data is used by the PropertyList component to display
 * different types of accommodations available for booking.
 */

/**
 * Array of property type objects containing accommodation categories
 * Used for displaying property type browsing on the home page
 */
export const propertyTypes = [
  {
    id: 1,
    name: "Hotels",
    count: 233,
    image: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    alt: "Hotel accommodation"
  },
  {
    id: 2,
    name: "Apartments",
    count: 2331,
    image: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    alt: "Apartment accommodation"
  },
  {
    id: 3,
    name: "Resorts",
    count: 2331,
    image: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    alt: "Resort accommodation"
  },
  {
    id: 4,
    name: "Villas",
    count: 2331,
    image: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    alt: "Villa accommodation"
  },
  {
    id: 5,
    name: "Cabins",
    count: 2331,
    image: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    alt: "Cabin accommodation"
  }
]; 