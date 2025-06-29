import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faStar, faMapMarkerAlt, faClock, faUsers, faSuitcase, faCheck, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "./carRentalItem.css";

const CarRentalItem = ({ rental }) => {
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
      case 'gps':
        return faMapMarkerAlt;
      case 'bluetooth':
        return faSnowflake;
      case 'backup camera':
        return faCar;
      case 'usb charging':
        return faSnowflake;
      case 'free cancellation':
        return faCheck;
      case 'all-wheel drive':
        return faCar;
      case 'leather seats':
        return faCar;
      case 'premium sound':
        return faSnowflake;
      case 'autopilot':
        return faCar;
      case 'supercharger access':
        return faSnowflake;
      case 'spacious interior':
        return faCar;
      default:
        return faCheck;
    }
  };

  const discount = rental.price.originalDaily ? Math.round(((rental.price.originalDaily - rental.price.daily) / rental.price.originalDaily) * 100) : 0;

  return (
    <div className="carRentalItem">
      <div className="rentalHeader">
        <div className="companyInfo">
          <img src={rental.logo} alt={rental.company} className="companyLogo" />
          <div className="companyDetails">
            <h3 className="companyName">{rental.company}</h3>
            <span className="companyCode">{rental.companyCode}</span>
          </div>
        </div>
        <div className="rentalRating">
          <span>{getRatingText(rental.rating)}</span>
          <button 
            className="ratingButton"
            style={{ backgroundColor: getRatingColor(rental.rating) }}
          >
            {rental.rating}
          </button>
        </div>
      </div>

      <div className="vehicleSection">
        <div className="vehicleImage">
          <img src={rental.vehicle.image} alt={rental.vehicle.model} />
        </div>
        <div className="vehicleInfo">
          <h4 className="vehicleModel">{rental.vehicle.model}</h4>
          <div className="vehicleType">{rental.vehicle.type}</div>
          <div className="vehicleSpecs">
            <div className="spec">
              <FontAwesomeIcon icon={faUsers} />
              <span>{rental.vehicle.seats} seats</span>
            </div>
            <div className="spec">
              <FontAwesomeIcon icon={faSuitcase} />
              <span>{rental.vehicle.luggage} bags</span>
            </div>
            <div className="spec">
              <FontAwesomeIcon icon={faCar} />
              <span>{rental.vehicle.transmission}</span>
            </div>
          </div>
          <div className="vehicleFeatures">
            {rental.vehicle.features.slice(0, 3).map((feature, index) => (
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
            <div className="airport">{rental.location.airport}</div>
            <div className="address">{rental.location.address}</div>
            <div className="pickupTime">
              <FontAwesomeIcon icon={faClock} />
              <span>{rental.location.pickupTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="featuresSection">
        <div className="featuresList">
          {rental.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="featureItem">
              <FontAwesomeIcon icon={getFeatureIcon(feature)} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="insuranceSection">
        <h5>Insurance Options</h5>
        <div className="insuranceOptions">
          <div className="insuranceOption">
            <span className="insuranceType">Basic</span>
            <span className="insurancePrice">${rental.insurance.basic}/day</span>
          </div>
          <div className="insuranceOption">
            <span className="insuranceType">Premium</span>
            <span className="insurancePrice">${rental.insurance.premium}/day</span>
          </div>
          <div className="insuranceOption">
            <span className="insuranceType">Full</span>
            <span className="insurancePrice">${rental.insurance.full}/day</span>
          </div>
        </div>
      </div>

      <div className="rentalPricing">
        <div className="priceContainer">
          <div className="priceOptions">
            <div className="priceOption">
              <span className="priceLabel">Daily</span>
              <div className="priceValue">
                {discount > 0 && (
                  <span className="originalPrice">${rental.price.originalDaily}</span>
                )}
                <span className="currentPrice">${rental.price.daily}</span>
              </div>
            </div>
            <div className="priceOption">
              <span className="priceLabel">Weekly</span>
              <div className="priceValue">
                {discount > 0 && (
                  <span className="originalPrice">${rental.price.originalWeekly}</span>
                )}
                <span className="currentPrice">${rental.price.weekly}</span>
              </div>
            </div>
            <div className="priceOption">
              <span className="priceLabel">Monthly</span>
              <div className="priceValue">
                {discount > 0 && (
                  <span className="originalPrice">${rental.price.originalMonthly}</span>
                )}
                <span className="currentPrice">${rental.price.monthly}</span>
              </div>
            </div>
          </div>
          {discount > 0 && (
            <div className="discountBadge">-{discount}%</div>
          )}
        </div>
        <div className="priceDetails">
          <span className="includesTaxes">Includes taxes & fees</span>
          <span className="reviews">({rental.reviews} reviews)</span>
        </div>
        <button className="selectRentalBtn">
          Select Car
        </button>
      </div>
    </div>
  );
};

export default CarRentalItem; 