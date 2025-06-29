/**
 * Featured Properties Component
 * 
 * This component displays a selection of featured properties that are
 * recommended to users based on popularity, ratings, and special offers.
 * It showcases properties with their images, names, locations, prices,
 * and ratings to encourage bookings.
 * 
 * Features:
 * - Grid layout of featured property cards
 * - Property images with overlay information
 * - Property name, city, and starting price display
 * - Rating system with numerical score and descriptive text
 * - Responsive design for different screen sizes
 * 
 * The component is used on the home page to highlight recommended
 * accommodations and encourage user engagement and bookings.
 * 
 * @component
 * @returns {JSX.Element} Grid of featured property cards
 */
import "./featuredProperties.css";
import { hotels } from "../../data/hotels";

const FeaturedProperties = () => {
  // Filter hotels to get only featured ones and limit to 4
  const featuredHotels = hotels.filter(hotel => hotel.featured).slice(0, 4);

  // Helper function to get rating description
  const getRatingDescription = (rating) => {
    if (rating >= 9.0) return "Exceptional";
    if (rating >= 8.5) return "Excellent";
    if (rating >= 8.0) return "Very Good";
    if (rating >= 7.5) return "Good";
    return "Fair";
  };

  return (
    <div className="fp">
      {/* Map through featured hotels from data file */}
      {featuredHotels.map((hotel) => (
        <div key={hotel.id} className="fpItem">
          <img
            src={hotel.photos[0]}
            alt={`${hotel.name} exterior`}
            className="fpImg"
          />
          <span className="fpName">{hotel.name}</span>
          <span className="fpCity">{hotel.city}</span>
          <span className="fpPrice">Starting from ${hotel.cheapestPrice}</span>
          <div className="fpRating">
            <button>{hotel.rating}</button>
            <span>{getRatingDescription(hotel.rating)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
