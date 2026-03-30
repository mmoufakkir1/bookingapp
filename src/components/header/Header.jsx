import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faSearch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { cities } from "../../data/hotels";

const navItems = [
  { id: "hotels", icon: faBed, label: "Stays" },
  { id: "flights", icon: faPlane, label: "Flights" },
  { id: "carRentals", icon: faCar, label: "Car rentals" },
  { id: "attractions", icon: faMapMarkerAlt, label: "Attractions" },
  { id: "airportTaxis", icon: faTaxi, label: "Airport taxis" },
];

const OptionCounter = ({ label, value, onChange, min = 0, max = 10 }) => (
  <div className="optionItem">
    <span className="optionText">{label}</span>
    <div className="optionCounter">
      <button
        type="button"
        className="optionCounterButton"
        disabled={value <= min}
        onClick={() => onChange("d")}
      >
        -
      </button>
      <span className="optionCounterNumber">{value}</span>
      <button
        type="button"
        className="optionCounterButton"
        disabled={value >= max}
        onClick={() => onChange("i")}
      >
        +
      </button>
    </div>
  </div>
);

const Header = ({ type }) => {
  const [activeTab, setActiveTab] = useState("hotels");
  const [destination, setDestination] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [focusedSuggestion, setFocusedSuggestion] = useState(-1);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestination(value);

    if (!value.trim()) {
      setFilteredCities([]);
      setShowSuggestions(false);
      setFocusedSuggestion(-1);
      return;
    }

    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCities(filtered);
    setShowSuggestions(filtered.length > 0);
    setFocusedSuggestion(-1);
  };

  const handleDestinationKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedSuggestion((prev) =>
        prev < filteredCities.length - 1 ? prev + 1 : prev
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (focusedSuggestion >= 0) {
        setDestination(filteredCities[focusedSuggestion]);
      }
      setShowSuggestions(false);
      setFocusedSuggestion(-1);
      return;
    }

    if (event.key === "Escape") {
      setShowSuggestions(false);
      setFocusedSuggestion(-1);
    }
  };

  const handleSearch = () => {
    if (!destination.trim()) {
      return;
    }

    navigate("/hotels", { state: { destination, date, options } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".searchFieldWrapper")) {
        setShowSuggestions(false);
        setOpenDate(false);
        setOpenOptions(false);
        setFocusedSuggestion(-1);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getDateLabel = () =>
    `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
      date[0].endDate,
      "MM/dd/yyyy"
    )}`;

  const getOptionsLabel = () =>
    `${options.adult} adult · ${options.children} children · ${options.room} room`;

  const renderDestinationSuggestions = () =>
    showSuggestions && (
      <div className="destinationSuggestions">
        {filteredCities.map((city, index) => (
          <div
            key={city}
            className={`destinationSuggestion ${
              focusedSuggestion === index ? "focused" : ""
            }`}
            onClick={() => {
              setDestination(city);
              setShowSuggestions(false);
              setFocusedSuggestion(-1);
            }}
            onMouseEnter={() => setFocusedSuggestion(index)}
          >
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            <span>{city}</span>
          </div>
        ))}
      </div>
    );

  const renderDatePicker = () =>
    openDate && (
      <DateRange
        editableDateInputs
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="date"
        minDate={new Date()}
      />
    );

  const renderOptionsPanel = () =>
    openOptions && (
      <div className="options">
        <OptionCounter
          label="Adults"
          value={options.adult}
          onChange={(operation) => handleOption("adult", operation)}
          min={1}
        />
        <OptionCounter
          label="Children"
          value={options.children}
          onChange={(operation) => handleOption("children", operation)}
          min={0}
        />
        <OptionCounter
          label="Rooms"
          value={options.room}
          onChange={(operation) => handleOption("room", operation)}
          min={1}
        />
      </div>
    );

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`headerListItem ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discounts? It&apos;s Genius.</h1>
            <p className="headerDesc">
              Get rewarded for your travels with instant savings of 10% or more
              when you sign in.
            </p>
            <button type="button" className="headerBtn">
              Sign in / Register
            </button>

            <div className="headerSearch">
              <div className="searchFieldWrapper destinationField">
                <button type="button" className="headerSearchItem">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    value={destination}
                    onChange={handleDestinationChange}
                    onKeyDown={handleDestinationKeyDown}
                    onFocus={() => setShowSuggestions(filteredCities.length > 0)}
                  />
                </button>
                {renderDestinationSuggestions()}
              </div>

              <div className="searchFieldWrapper dateField">
                <button
                  type="button"
                  className="headerSearchItem"
                  onClick={() => {
                    setOpenDate((prev) => !prev);
                    setOpenOptions(false);
                  }}
                >
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span className="headerSearchText">{getDateLabel()}</span>
                </button>
                {renderDatePicker()}
              </div>

              <div className="searchFieldWrapper optionsField">
                <button
                  type="button"
                  className="headerSearchItem"
                  onClick={() => {
                    setOpenOptions((prev) => !prev);
                    setOpenDate(false);
                  }}
                >
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span className="headerSearchText">{getOptionsLabel()}</span>
                </button>
                {renderOptionsPanel()}
              </div>

              <button type="button" className="headerSearchButton" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
                <span>Search</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
