import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faMapMarkerAlt, faUsers, faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./attractionItem.css";

const AttractionItem = ({ attraction }) => {
  const getRatingText = (rating) => {
    if (rating >= 4.5) return "Exceptional";
    if (rating >= 4.0) return "Excellent";
    if (rating >= 3.5) return "Very Good";
    if (rating >= 3.0) return "Good";
    return "Fair";
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "#003580";
    if (rating >= 4.0) return "#007c2e";
    if (rating >= 3.5) return "#febb02";
    if (rating >= 3.0) return "#ff6b35";
    return "#cc0000";
  };

  const discount = attraction.price.originalPrice ? Math.round(((attraction.price.originalPrice - attraction.price.adult) / attraction.price.originalPrice) * 100) : 0;

  return (
    <div className="attractionItem">
      <div className="attractionImage">
        <img src={attraction.image} alt={attraction.name} />
        <div className="categoryBadge">{attraction.category}</div>
      </div>

      <div className="attractionContent">
        <div className="attractionHeader">
          <div className="attractionInfo">
            <h3 className="attractionName">{attraction.name}</h3>
            <div className="attractionLocation">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{attraction.city}, {attraction.country}</span>
            </div>
          </div>
          <div className="attractionRating">
            <span>{getRatingText(attraction.rating)}</span>
            <button 
              className="ratingButton"
              style={{ backgroundColor: getRatingColor(attraction.rating) }}
            >
              {attraction.rating}
            </button>
          </div>
        </div>

        <div className="attractionDescription">
          <p>{attraction.description}</p>
        </div>

        <div className="attractionDetails">
          <div className="detailRow">
            <div className="detailItem">
              <FontAwesomeIcon icon={faClock} />
              <span className="detailLabel">Duration:</span>
              <span className="detailValue">{attraction.duration}</span>
            </div>
            <div className="detailItem">
              <FontAwesomeIcon icon={faClock} />
              <span className="detailLabel">Hours:</span>
              <span className="detailValue">{attraction.openingHours}</span>
            </div>
          </div>
          <div className="detailRow">
            <div className="detailItem">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="detailLabel">Address:</span>
              <span className="detailValue">{attraction.address}</span>
            </div>
          </div>
        </div>

        <div className="attractionHighlights">
          <h4>Highlights</h4>
          <div className="highlightsList">
            {attraction.highlights.map((highlight, index) => (
              <div key={index} className="highlightItem">
                <FontAwesomeIcon icon={faCheck} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="attractionIncluded">
          <div className="includedSection">
            <h4>What's Included</h4>
            <div className="includedList">
              {attraction.included.map((item, index) => (
                <div key={index} className="includedItem">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="notIncludedSection">
            <h4>Not Included</h4>
            <div className="notIncludedList">
              {attraction.notIncluded.map((item, index) => (
                <div key={index} className="notIncludedItem">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="attractionPolicies">
          <div className="policyItem">
            <FontAwesomeIcon icon={faCheck} />
            <span>{attraction.cancellation}</span>
          </div>
          <div className="policyItem">
            <FontAwesomeIcon icon={faUsers} />
            <span>Available in {attraction.languages.length} languages</span>
          </div>
        </div>

        <div className="attractionTips">
          <h4>Tips</h4>
          <div className="tipsList">
            {attraction.tips.map((tip, index) => (
              <div key={index} className="tipItem">
                <span>• {tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="attractionPricing">
          <div className="priceContainer">
            <div className="priceOptions">
              <div className="priceOption">
                <span className="priceLabel">Adult</span>
                <div className="priceValue">
                  {discount > 0 && (
                    <span className="originalPrice">${attraction.price.originalPrice}</span>
                  )}
                  <span className="currentPrice">${attraction.price.adult}</span>
                </div>
              </div>
              <div className="priceOption">
                <span className="priceLabel">Child</span>
                <span className="currentPrice">${attraction.price.child}</span>
              </div>
              <div className="priceOption">
                <span className="priceLabel">Senior</span>
                <span className="currentPrice">${attraction.price.senior}</span>
              </div>
            </div>
            {discount > 0 && (
              <div className="discountBadge">-{discount}%</div>
            )}
          </div>
          <div className="priceDetails">
            <span className="reviews">({attraction.reviews.toLocaleString()} reviews)</span>
            <span className="bestTime">Best time: {attraction.bestTime}</span>
          </div>
          <button className="selectAttractionBtn">
            Select Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionItem; 