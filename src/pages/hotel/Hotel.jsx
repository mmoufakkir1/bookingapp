import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faStar,
  faWifi,
  faUtensils,
  faSwimmingPool,
  faParking,
  faSnowflake,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../../data/hotels";

const Hotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  useEffect(() => {
    const foundHotel = hotels.find(h => h.id === parseInt(id));
    setHotel(foundHotel);
    if (foundHotel && foundHotel.roomTypes.length > 0) {
      setSelectedRoom(foundHotel.roomTypes[0]);
    }
  }, [id]);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? hotel.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === hotel.photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

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

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert(`Booking confirmed for ${hotel.name}! Check your email for confirmation.`);
    setShowBookingForm(false);
  };

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const discount = hotel.originalPrice ? Math.round(((hotel.originalPrice - hotel.cheapestPrice) / hotel.originalPrice) * 100) : 0;

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={hotel.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <div className="hotelHeader">
            <div className="hotelInfo">
              <h1 className="hotelTitle">{hotel.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{hotel.address}</span>
              </div>
              <span className="hotelDistance">{hotel.distance}</span>
              <div className="hotelRating">
                <span>{getRatingText(hotel.rating)}</span>
                <button 
                  className="ratingButton"
                  style={{ backgroundColor: getRatingColor(hotel.rating) }}
                >
                  {hotel.rating}
                </button>
              </div>
            </div>
            <div className="hotelActions">
              <button 
                className="bookNow"
                onClick={() => setShowBookingForm(true)}
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>

          {hotel.highlights && hotel.highlights.length > 0 && (
            <div className="hotelHighlights">
              {hotel.highlights.map((highlight, index) => (
                <span key={index} className="hotelHighlight">
                  {highlight}
                </span>
              ))}
            </div>
          )}

          <div className="hotelImages">
            {hotel.photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{hotel.title}</h1>
              <p className="hotelDesc">{hotel.desc}</p>
              
              <div className="hotelAmenities">
                <h3>Most popular facilities</h3>
                <div className="amenitiesGrid">
                  {hotel.amenities.map((amenity, index) => {
                    const icon = getAmenityIcon(amenity);
                    return (
                      <div key={index} className="amenityItem">
                        {icon && <FontAwesomeIcon icon={icon} />}
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hotelPolicies">
                <h3>Property policies</h3>
                <div className="policiesList">
                  <div className="policyItem">
                    <span className="policyLabel">Check-in:</span>
                    <span className="policyValue">{hotel.policies.checkIn}</span>
                  </div>
                  <div className="policyItem">
                    <span className="policyLabel">Check-out:</span>
                    <span className="policyValue">{hotel.policies.checkOut}</span>
                  </div>
                  <div className="policyItem">
                    <span className="policyLabel">Cancellation:</span>
                    <span className="policyValue">{hotel.policies.cancellation}</span>
                  </div>
                  <div className="policyItem">
                    <span className="policyLabel">Children:</span>
                    <span className="policyValue">{hotel.policies.children}</span>
                  </div>
                  <div className="policyItem">
                    <span className="policyLabel">Pets:</span>
                    <span className="policyValue">{hotel.policies.pets}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of {hotel.city}, this property has an
                excellent location score of {hotel.rating}!
              </span>
              
              <div className="roomSelection">
                <h3>Select your room</h3>
                {hotel.roomTypes.map((room) => (
                  <div 
                    key={room.id} 
                    className={`roomOption ${selectedRoom?.id === room.id ? 'selected' : ''}`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div className="roomInfo">
                      <h4>{room.name}</h4>
                      <p>{room.desc}</p>
                      <div className="roomFeatures">
                        {room.features.map((feature, index) => (
                          <span key={index} className="roomFeature">
                            <FontAwesomeIcon icon={faCheck} />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="roomPrice">
                      <div className="priceContainer">
                        {room.originalPrice && room.originalPrice > room.price && (
                          <span className="originalPrice">${room.originalPrice}</span>
                        )}
                        <span className="currentPrice">${room.price}</span>
                        <span className="pricePerNight">per night</span>
                      </div>
                      <button className="selectRoomBtn">
                        {selectedRoom?.id === room.id ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {selectedRoom && (
                <div className="selectedRoomSummary">
                  <h2>
                    <b>${selectedRoom.price * 9}</b> (9 nights)
                  </h2>
                  <button 
                    className="bookNowBtn"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Reserve or Book Now!
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {showBookingForm && (
          <div className="bookingModal">
            <div className="bookingModalContent">
              <div className="bookingModalHeader">
                <h2>Complete your booking</h2>
                <button 
                  className="closeModal"
                  onClick={() => setShowBookingForm(false)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              
              <form onSubmit={handleBookingSubmit} className="bookingForm">
                <div className="formGroup">
                  <label>First Name</label>
                  <input
                    type="text"
                    required
                    value={bookingData.firstName}
                    onChange={(e) => setBookingData({...bookingData, firstName: e.target.value})}
                  />
                </div>
                
                <div className="formGroup">
                  <label>Last Name</label>
                  <input
                    type="text"
                    required
                    value={bookingData.lastName}
                    onChange={(e) => setBookingData({...bookingData, lastName: e.target.value})}
                  />
                </div>
                
                <div className="formGroup">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  />
                </div>
                
                <div className="formGroup">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  />
                </div>
                
                <div className="formGroup">
                  <label>Special Requests (optional)</label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                    rows="3"
                  />
                </div>
                
                <div className="bookingSummary">
                  <h3>Booking Summary</h3>
                  <div className="summaryItem">
                    <span>Room:</span>
                    <span>{selectedRoom?.name}</span>
                  </div>
                  <div className="summaryItem">
                    <span>Total for 9 nights:</span>
                    <span>${selectedRoom?.price * 9}</span>
                  </div>
                </div>
                
                <button type="submit" className="confirmBookingBtn">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
