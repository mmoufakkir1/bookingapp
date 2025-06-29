import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi, faStar, faMapMarkerAlt, faClock, faUsers, faSuitcase, faCheck, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./airportTaxiItem.css";

const AirportTaxiItem = ({ taxi }) => {
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

  const getFeatureIcon = (feature) => {
    switch (feature.toLowerCase()) {
      case 'air conditioning':
        return faTaxi;
      case 'gps':
        return faMapMarkerAlt;
      case 'credit card payment':
        return faCreditCard;
      case 'child seat available':
        return faUsers;
      case 'app-based booking':
        return faTaxi;
      case 'real-time tracking':
        return faClock;
      case 'multiple vehicle options':
        return faTaxi;
      case 'cashless payment':
        return faCreditCard;
      case 'contactless payment':
        return faCreditCard;
      case 'wheelchair accessible':
        return faUsers;
      case 'hybrid engine':
        return faTaxi;
      default:
        return faCheck;
    }
  };

  const getPriceRange = () => {
    const prices = Object.values(taxi.price).filter(price => typeof price === 'number');
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return { min: minPrice, max: maxPrice };
  };

  const priceRange = getPriceRange();
  const discount = taxi.price.originalPrice ? Math.round(((taxi.price.originalPrice - priceRange.min) / taxi.price.originalPrice) * 100) : 0;

  return (
    <div className="airportTaxiItem">
      <div className="taxiHeader">
        <div className="companyInfo">
          <img src={taxi.logo} alt={taxi.company} className="companyLogo" />
          <div className="companyDetails">
            <h3 className="companyName">{taxi.company}</h3>
            <span className="companyCode">{taxi.companyCode}</span>
          </div>
        </div>
        <div className="taxiRating">
          <span>{getRatingText(taxi.rating)}</span>
          <button 
            className="ratingButton"
            style={{ backgroundColor: getRatingColor(taxi.rating) }}
          >
            {taxi.rating}
          </button>
        </div>
      </div>

      <div className="vehicleSection">
        <div className="vehicleInfo">
          <h4 className="vehicleModel">{taxi.vehicle.model}</h4>
          <div className="vehicleType">{taxi.vehicle.type}</div>
          <div className="vehicleSpecs">
            <div className="spec">
              <FontAwesomeIcon icon={faUsers} />
              <span>{taxi.vehicle.capacity} passengers</span>
            </div>
            <div className="spec">
              <FontAwesomeIcon icon={faSuitcase} />
              <span>{taxi.vehicle.luggage} bags</span>
            </div>
          </div>
          <div className="vehicleFeatures">
            {taxi.vehicle.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="feature">
                <FontAwesomeIcon icon={getFeatureIcon(feature)} />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="locationSection">
        <div className="locationInfo">
          <div className="locationHeader">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span className="locationTitle">Pickup Location</span>
          </div>
          <div className="locationDetails">
            <div className="airport">{taxi.location.airport}</div>
            <div className="terminal">{taxi.location.terminal}</div>
            <div className="pickupPoint">{taxi.location.pickupPoint}</div>
            <div className="waitTime">
              <FontAwesomeIcon icon={faClock} />
              <span>Wait time: {taxi.waitTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="destinationsSection">
        <h4>Popular Destinations</h4>
        <div className="destinationsList">
          {Object.entries(taxi.price)
            .filter(([key, value]) => typeof value === 'number' && key !== 'originalPrice')
            .slice(0, 4)
            .map(([destination, price]) => (
              <div key={destination} className="destinationItem">
                <span className="destinationName">{destination.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="destinationPrice">${price}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="featuresSection">
        <div className="featuresList">
          {taxi.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="featureItem">
              <FontAwesomeIcon icon={getFeatureIcon(feature)} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="includedSection">
        <div className="includedList">
          <h4>What's Included</h4>
          <div className="includedItems">
            {taxi.included.map((item, index) => (
              <div key={index} className="includedItem">
                <FontAwesomeIcon icon={faCheck} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="notIncludedList">
          <h4>Not Included</h4>
          <div className="notIncludedItems">
            {taxi.notIncluded.map((item, index) => (
              <div key={index} className="notIncludedItem">
                <FontAwesomeIcon icon={faCheck} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="policiesSection">
        <div className="policyItem">
          <FontAwesomeIcon icon={faCheck} />
          <span>{taxi.cancellation}</span>
        </div>
        <div className="policyItem">
          <FontAwesomeIcon icon={faCreditCard} />
          <span>Payment: {taxi.paymentMethods.join(', ')}</span>
        </div>
        <div className="policyItem">
          <FontAwesomeIcon icon={faUsers} />
          <span>Languages: {taxi.languages.join(', ')}</span>
        </div>
      </div>

      <div className="taxiPricing">
        <div className="priceContainer">
          <div className="priceRange">
            <span className="priceLabel">Price Range</span>
            <div className="priceValue">
              {discount > 0 && (
                <span className="originalPrice">${taxi.price.originalPrice}</span>
              )}
              <span className="currentPrice">${priceRange.min} - ${priceRange.max}</span>
            </div>
          </div>
          {discount > 0 && (
            <div className="discountBadge">-{discount}%</div>
          )}
        </div>
        <div className="priceDetails">
          <span className="includesTaxes">Fixed rates, no hidden fees</span>
          <span className="reviews">({taxi.reviews.toLocaleString()} reviews)</span>
        </div>
        <button className="selectTaxiBtn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default AirportTaxiItem; 