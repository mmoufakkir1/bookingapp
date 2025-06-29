import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faClock, faStar, faWifi, faUtensils, faSnowflake, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./flightItem.css";

const FlightItem = ({ flight }) => {
  const getRatingText = (rating) => {
    if (rating >= 4.5) return "Excellent";
    if (rating >= 4.0) return "Very Good";
    if (rating >= 3.5) return "Good";
    if (rating >= 3.0) return "Fair";
    return "Poor";
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "#007c2e";
    if (rating >= 4.0) return "#febb02";
    if (rating >= 3.5) return "#ff6b35";
    return "#cc0000";
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return faWifi;
      case 'entertainment':
        return faPlane;
      case 'meal':
        return faUtensils;
      case 'usb charging':
        return faSnowflake;
      case 'power outlet':
        return faSnowflake;
      case 'shower':
        return faSnowflake;
      default:
        return null;
    }
  };

  const discount = flight.originalPrice ? Math.round(((flight.originalPrice - flight.price) / flight.originalPrice) * 100) : 0;

  return (
    <div className="flightItem">
      <div className="flightHeader">
        <div className="airlineInfo">
          <img src={flight.logo} alt={flight.airline} className="airlineLogo" />
          <div className="airlineDetails">
            <h3 className="airlineName">{flight.airline}</h3>
            <span className="flightNumber">{flight.flightNumber}</span>
          </div>
        </div>
        <div className="flightRating">
          <span>{getRatingText(flight.rating)}</span>
          <button 
            className="ratingButton"
            style={{ backgroundColor: getRatingColor(flight.rating) }}
          >
            {flight.rating}
          </button>
        </div>
      </div>

      <div className="flightRoute">
        <div className="departure">
          <div className="time">{flight.departure.time}</div>
          <div className="city">{flight.departure.city}</div>
          <div className="airport">{flight.departure.airport}</div>
        </div>
        
        <div className="flightInfo">
          <div className="duration">
            <FontAwesomeIcon icon={faClock} />
            <span>{flight.duration}</span>
          </div>
          <div className="flightLine">
            <div className="line"></div>
            <FontAwesomeIcon icon={faPlane} className="planeIcon" />
            <div className="line"></div>
          </div>
          <div className="stops">
            {flight.stops === 0 ? "Direct" : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
          </div>
        </div>

        <div className="arrival">
          <div className="time">{flight.arrival.time}</div>
          <div className="city">{flight.arrival.city}</div>
          <div className="airport">{flight.arrival.airport}</div>
        </div>
      </div>

      <div className="flightDetails">
        <div className="detailsLeft">
          <div className="aircraft">
            <span className="label">Aircraft:</span>
            <span className="value">{flight.aircraft}</span>
          </div>
          <div className="class">
            <span className="label">Class:</span>
            <span className="value">{flight.class}</span>
          </div>
          <div className="seats">
            <span className="label">Available:</span>
            <span className="value">{flight.availableSeats} seats</span>
          </div>
        </div>

        <div className="amenities">
          {flight.amenities.slice(0, 4).map((amenity, index) => {
            const icon = getAmenityIcon(amenity);
            return icon ? (
              <div key={index} className="amenity" title={amenity}>
                <FontAwesomeIcon icon={icon} />
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="flightPolicies">
        <div className="cancellation">
          <FontAwesomeIcon icon={faCheck} />
          <span>{flight.cancellation}</span>
        </div>
        {flight.refundable && (
          <div className="refundable">
            <FontAwesomeIcon icon={faCheck} />
            <span>Refundable</span>
          </div>
        )}
      </div>

      <div className="flightPricing">
        <div className="priceContainer">
          {discount > 0 && (
            <span className="originalPrice">${flight.originalPrice}</span>
          )}
          <span className="currentPrice">${flight.price}</span>
          {discount > 0 && (
            <span className="discount">-{discount}%</span>
          )}
        </div>
        <div className="priceDetails">
          <span className="pricePerPerson">per person</span>
          <span className="includesTaxes">Includes taxes & fees</span>
        </div>
        <button className="selectFlightBtn">
          Select
        </button>
      </div>
    </div>
  );
};

export default FlightItem; 