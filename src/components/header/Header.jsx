/**
 * Header Component
 * 
 * This is a complex component that serves as the main search interface for the booking application.
 * It provides a multi-tab search system for different types of travel services including:
 * - Hotels/Stays
 * - Flights
 * - Car Rentals
 * - Attractions
 * - Airport Taxis
 * 
 * Features:
 * - Tabbed search interface with different fields for each service type
 * - Date range picker for hotel bookings
 * - Guest/room counter with increment/decrement functionality
 * - Destination autocomplete with keyboard navigation
 * - Search functionality with navigation to results page
 * - Responsive design with different layouts for list vs home page
 * 
 * State Management:
 * - activeTab: Currently selected search tab
 * - destination: User-entered destination
 * - date: Selected date range for bookings
 * - options: Guest and room count settings
 * - showSuggestions: Controls autocomplete dropdown visibility
 * - filteredCities: Filtered city suggestions based on user input
 * - focusedSuggestion: Currently highlighted suggestion for keyboard navigation
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.type - Layout type ("list" for list page, undefined for home page)
 * @returns {JSX.Element} The header component with search functionality
 */
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faSearch,
  faMapMarkerAlt,
  faCalendarAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { cities } from "../../data/hotels";

const Header = ({ type }) => {
  // State for managing the active search tab
  const [activeTab, setActiveTab] = useState(type || "hotels");
  
  // State for destination input and autocomplete
  const [destination, setDestination] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [focusedSuggestion, setFocusedSuggestion] = useState(-1);
  
  // State for date picker functionality
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Default to 1 day later
      key: "selection",
    },
  ]);
  
  // State for guest/room options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  /**
   * Handles increment/decrement operations for guest and room counts
   * @param {string} name - The option to modify ("adult", "children", "room")
   * @param {string} operation - The operation to perform ("i" for increment, "d" for decrement)
   */
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  /**
   * Handles destination input changes and filters city suggestions
   * @param {Event} e - Input change event
   */
  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    
    if (value.length > 0) {
      // Filter cities based on user input (case-insensitive)
      const filtered = cities.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowSuggestions(true);
      setFocusedSuggestion(-1);
    } else {
      setShowSuggestions(false);
    }
  };

  /**
   * Handles keyboard navigation for the autocomplete dropdown
   * @param {KeyboardEvent} e - Keyboard event
   */
  const handleDestinationKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedSuggestion(prev => 
        prev < filteredCities.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedSuggestion(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedSuggestion >= 0) {
        handleCitySelect(filteredCities[focusedSuggestion]);
      } else if (filteredCities.length > 0) {
        handleCitySelect(filteredCities[0]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setFocusedSuggestion(-1);
    }
  };

  /**
   * Handles selection of a city from the autocomplete dropdown
   * @param {string} city - The selected city name
   */
  const handleCitySelect = (city) => {
    setDestination(city);
    setShowSuggestions(false);
    setFocusedSuggestion(-1);
  };

  /**
   * Handles the search button click and navigates to results page
   */
  const handleSearch = () => {
    if (destination.trim()) {
      navigate("/hotels", { state: { destination, date, options } });
    }
  };

  /**
   * Handles clicking on a suggestion in the autocomplete dropdown
   * @param {string} city - The clicked city name
   */
  const handleSuggestionClick = (city) => {
    handleCitySelect(city);
  };

  /**
   * Handles mouse hover on suggestions for visual feedback
   * @param {number} index - The index of the hovered suggestion
   */
  const handleSuggestionHover = (index) => {
    setFocusedSuggestion(index);
  };

  // Effect to handle clicking outside the autocomplete dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.headerSearchItem')) {
        setShowSuggestions(false);
        setFocusedSuggestion(-1);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * Renders different search fields based on the active tab
   * @returns {JSX.Element} The appropriate search fields for the current tab
   */
  const renderSearchFields = () => {
    switch (activeTab) {
      case "hotels":
        return (
          <>
            {/* Destination input with autocomplete */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                value={destination}
                onChange={handleDestinationChange}
                onKeyDown={handleDestinationKeyDown}
                onFocus={() => setShowSuggestions(destination.length > 0)}
              />
              {/* Autocomplete dropdown */}
              {showSuggestions && filteredCities.length > 0 && (
                <div className="destinationSuggestions">
                  {filteredCities.map((city, index) => (
                    <div 
                      key={index} 
                      className={`destinationSuggestion ${focusedSuggestion === index ? 'focused' : ''}`}
                      onClick={() => handleSuggestionClick(city)}
                      onMouseEnter={() => handleSuggestionHover(index)}
                    >
                      <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Date range picker */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            
            {/* Guest and room counter */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  {/* Adult counter */}
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Children counter */}
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Room counter */}
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      
      case "flights":
        return (
          <>
            {/* Flight search fields */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPlane} className="headerIcon" />
              <input
                type="text"
                placeholder="From where?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPlane} className="headerIcon" />
              <input
                type="text"
                placeholder="To where?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
              <span className="headerSearchText">Departure Date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
              <span className="headerSearchText">Return Date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUsers} className="headerIcon" />
              <span className="headerSearchText">1 passenger</span>
            </div>
          </>
        );
      
      case "carRentals":
        return (
          <>
            {/* Car rental search fields */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="headerIcon" />
              <input
                type="text"
                placeholder="Pick-up location"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
              <span className="headerSearchText">Pick-up Date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
              <span className="headerSearchText">Drop-off Date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUsers} className="headerIcon" />
              <span className="headerSearchText">Driver age 25+</span>
            </div>
          </>
        );
      
      case "attractions":
        return (
          <>
            {/* Attractions search fields */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
              <span className="headerSearchText">Date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUsers} className="headerIcon" />
              <span className="headerSearchText">2 adults • 1 child</span>
            </div>
          </>
        );
      
      case "airportTaxis":
        return (
          <>
            {/* Airport taxi search fields */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
              <input
                type="text"
                placeholder="Airport"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="headerIcon" />
              <input
                type="text"
                placeholder="Destination"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarAlt} className="headerIcon" />
              <span className="headerSearchText">Pick-up Date</span>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUsers} className="headerIcon" />
              <span className="headerSearchText">2 passengers</span>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {/* Service type navigation tabs */}
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        
        {/* Hero content - only shown on home page */}
        {type !== "list" && (
          <>
            {/* Main promotional headline */}
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            
            {/* Promotional description */}
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            
            {/* Call-to-action button */}
            <button className="headerBtn">Sign in / Register</button>
            
            {/* Main search interface */}
            <div className="headerSearch">
              {/* Search tab buttons */}
              <div className="headerSearchTabs">
                <button 
                  className={`searchTab ${activeTab === "hotels" ? "active" : ""}`}
                  onClick={() => setActiveTab("hotels")}
                >
                  <FontAwesomeIcon icon={faBed} />
                  <span>Hotels</span>
                </button>
                <button 
                  className={`searchTab ${activeTab === "flights" ? "active" : ""}`}
                  onClick={() => setActiveTab("flights")}
                >
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
                </button>
                <button 
                  className={`searchTab ${activeTab === "carRentals" ? "active" : ""}`}
                  onClick={() => setActiveTab("carRentals")}
                >
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car Rentals</span>
                </button>
                <button 
                  className={`searchTab ${activeTab === "attractions" ? "active" : ""}`}
                  onClick={() => setActiveTab("attractions")}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Attractions</span>
                </button>
                <button 
                  className={`searchTab ${activeTab === "airportTaxis" ? "active" : ""}`}
                  onClick={() => setActiveTab("airportTaxis")}
                >
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport Taxis</span>
                </button>
              </div>
              
              {/* Search form content */}
              <div className="headerSearchContent">
                {renderSearchFields()}
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
