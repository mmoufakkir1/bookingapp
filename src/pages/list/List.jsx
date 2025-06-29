import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { hotels, cities, propertyTypes, amenities } from "../../data/hotels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFilter, faSort } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [date, setDate] = useState(location.state?.date || [
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || {
    adult: 1,
    children: 0,
    room: 1,
  });

  // Filter states
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);

  // Search suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    filterHotels();
  }, [destination, minPrice, maxPrice, selectedPropertyTypes, selectedAmenities, minRating, sortBy]);

  const filterHotels = () => {
    let filtered = hotels.filter(hotel => {
      // Destination filter
      if (destination && !hotel.city.toLowerCase().includes(destination.toLowerCase())) {
        return false;
      }

      // Price filter
      if (minPrice && hotel.cheapestPrice < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && hotel.cheapestPrice > parseInt(maxPrice)) {
        return false;
      }

      // Property type filter
      if (selectedPropertyTypes.length > 0 && !selectedPropertyTypes.includes(hotel.type)) {
        return false;
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every(amenity => 
          hotel.amenities.some(hotelAmenity => 
            hotelAmenity.toLowerCase().includes(amenity.toLowerCase())
          )
        );
        if (!hasAllAmenities) return false;
      }

      // Rating filter
      if (minRating > 0 && hotel.rating < minRating) {
        return false;
      }

      return true;
    });

    // Sort results
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.cheapestPrice - b.cheapestPrice);
        break;
      case "price-high":
        filtered.sort((a, b) => b.cheapestPrice - a.cheapestPrice);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "distance":
        // Simple distance sorting (you could implement real distance calculation)
        filtered.sort((a, b) => {
          const aDist = parseInt(a.distance.match(/\d+/)[0]);
          const bDist = parseInt(b.distance.match(/\d+/)[0]);
          return aDist - bDist;
        });
        break;
      default:
        // Recommended - keep original order
        break;
    }

    setFilteredHotels(filtered);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    
    if (value.length > 0) {
      const filtered = cities.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleCitySelect = (city) => {
    setDestination(city);
    setShowSuggestions(false);
  };

  const handlePropertyTypeToggle = (type) => {
    setSelectedPropertyTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedPropertyTypes([]);
    setSelectedAmenities([]);
    setMinRating(0);
    setSortBy("recommended");
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <div className="destinationInput">
                <input 
                  placeholder={destination || "Where are you going?"} 
                  type="text" 
                  value={destination}
                  onChange={handleDestinationChange}
                  onFocus={() => destination && setShowSuggestions(true)}
                />
                {showSuggestions && filteredCities.length > 0 && (
                  <div className="citySuggestions">
                    {filteredCities.map((city, index) => (
                      <div 
                        key={index} 
                        className="citySuggestion"
                        onClick={() => handleCitySelect(city)}
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input 
                    type="number" 
                    className="lsOptionInput" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input 
                    type="number" 
                    className="lsOptionInput" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="1000"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={filterHotels}>Search</button>
          </div>
          <div className="listResult">
            <div className="listResultHeader">
              <div className="resultCount">
                {filteredHotels.length} properties found
              </div>
              <div className="resultControls">
                <button 
                  className="filterButton"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FontAwesomeIcon icon={faFilter} />
                  Filters
                </button>
                <select 
                  className="sortSelect"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="distance">Distance from center</option>
                </select>
              </div>
            </div>

            {showFilters && (
              <div className="filterPanel">
                <div className="filterSection">
                  <h3>Property Type</h3>
                  {propertyTypes.map((type) => (
                    <label key={type} className="filterCheckbox">
                      <input
                        type="checkbox"
                        checked={selectedPropertyTypes.includes(type)}
                        onChange={() => handlePropertyTypeToggle(type)}
                      />
                      {type}
                    </label>
                  ))}
                </div>
                
                <div className="filterSection">
                  <h3>Rating</h3>
                  {[9, 8, 7, 6].map((rating) => (
                    <label key={rating} className="filterCheckbox">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                      />
                      <FontAwesomeIcon icon={faStar} style={{ color: '#febb02' }} />
                      {rating}+ stars
                    </label>
                  ))}
                </div>

                <div className="filterSection">
                  <h3>Amenities</h3>
                  {amenities.slice(0, 8).map((amenity) => (
                    <label key={amenity} className="filterCheckbox">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                      />
                      {amenity}
                    </label>
                  ))}
                </div>

                <button className="clearFilters" onClick={clearFilters}>
                  Clear all filters
                </button>
              </div>
            )}

            {filteredHotels.map((hotel) => (
              <SearchItem key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
