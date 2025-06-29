import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faWifi, faUtensils, faSwimmingPool, faParking, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "./searchItem.css";

const SearchItem = ({ hotel }) => {
  const getRatingText = (rating) => {
    if (rating >= 9.0) return "Exceptional";
    if (rating >= 8.0) return "Excellent";
    if (rating >= 7.0) return "Very Good";
    if (rating >= 6.0) return "Good";
    return "Fair";
  };

  const getRatingColor = (rating) => {
    if (rating >= 9.0) return "#003580";
    if (rating >= 8.0) return "#007c2e";
    if (rating >= 7.0) return "#febb02";
    if (rating >= 6.0) return "#ff6b35";
    return "#cc0000";
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'free wifi':
        return faWifi;
      case 'restaurant':
        return faUtensils;
      case 'pool':
        return faSwimmingPool;
      case 'parking':
      case 'valet parking':
        return faParking;
      case 'air conditioning':
        return faSnowflake;
      default:
        return null;
    }
  };

  const discount = hotel.originalPrice ? Math.round(((hotel.originalPrice - hotel.cheapestPrice) / hotel.originalPrice) * 100) : 0;

  return (
    <div className="searchItem">
      <img
        src={hotel.photos[0]}
        alt={hotel.name}
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siDistance">{hotel.distance}</span>
        {hotel.highlights && hotel.highlights.length > 0 && (
          <span className="siTaxiOp">{hotel.highlights[0]}</span>
        )}
        <span className="siSubtitle">
          {hotel.roomTypes && hotel.roomTypes[0] ? hotel.roomTypes[0].desc : hotel.title}
        </span>
        <span className="siFeatures">
          {hotel.amenities && hotel.amenities.slice(0, 3).join(" • ")}
        </span>
        {hotel.amenities && hotel.amenities.includes("Free cancellation") && (
          <>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </>
        )}
        {hotel.highlights && hotel.highlights.length > 1 && (
          <div className="siHighlights">
            {hotel.highlights.slice(1, 3).map((highlight, index) => (
              <span key={index} className="siHighlight">{highlight}</span>
            ))}
          </div>
        )}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{getRatingText(hotel.rating)}</span>
          <button 
            className="siRatingButton"
            style={{ backgroundColor: getRatingColor(hotel.rating) }}
          >
            {hotel.rating}
          </button>
        </div>
        <div className="siDetailTexts">
          <div className="siPriceContainer">
            {discount > 0 && (
              <span className="siOriginalPrice">${hotel.originalPrice}</span>
            )}
            <span className="siPrice">${hotel.cheapestPrice}</span>
            {discount > 0 && (
              <span className="siDiscount">-{discount}%</span>
            )}
          </div>
          <span className="siTaxOp">Includes taxes and fees</span>
          {hotel.amenities && hotel.amenities.length > 0 && (
            <div className="siAmenities">
              {hotel.amenities.slice(0, 4).map((amenity, index) => {
                const icon = getAmenityIcon(amenity);
                return icon ? (
                  <FontAwesomeIcon key={index} icon={icon} className="siAmenityIcon" title={amenity} />
                ) : null;
              })}
            </div>
          )}
          <button className="siCheckButton">
            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/hotels/${hotel.id}`}>
              See availability
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
