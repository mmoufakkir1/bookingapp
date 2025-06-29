/**
 * Featured Destinations Component
 * 
 * This component displays a selection of featured destinations/cities
 * that are popular among users. It showcases different cities with
 * their property counts to encourage user exploration.
 * 
 * Features:
 * - Grid layout of featured destination cards
 * - City images with overlay text
 * - Property count display for each destination
 * - Responsive design for different screen sizes
 * 
 * The component is used on the home page to highlight popular
 * travel destinations and encourage users to explore these locations.
 * 
 * @component
 * @returns {JSX.Element} Grid of featured destination cards
 */
import "./featured.css";
import { featuredDestinations } from "../../data/featuredDestinations";

const Featured = () => {
  return (
    <div className="featured">
      {/* Map through featured destinations from data file */}
      {featuredDestinations.map((destination) => (
        <div key={destination.id} className="featuredItem">
          <img
            src={destination.image}
            alt={destination.alt}
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>{destination.city}</h1>
            <h2>{destination.propertyCount} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
