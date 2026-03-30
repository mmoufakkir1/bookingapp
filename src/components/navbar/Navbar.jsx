import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faGlobe,
  faChevronDown,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

const currencies = ["USD", "EUR", "GBP", "JPY", "CAD"];
const languages = ["English (US)", "Spanish", "French", "German", "Japanese"];

const Navbar = () => {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English (US)");

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navTopRow">
          <Link to="/" className="logo">
            Booking<span className="logoHighlight">.com</span>
          </Link>

          <div className="navItems">
            <div className="navDropdown">
              <button
                className="navDropdownBtn"
                onClick={() => setShowCurrency((prev) => !prev)}
              >
                {currency}
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {showCurrency && (
                <div className="dropdownMenu">
                  {currencies.map((item) => (
                    <div
                      key={item}
                      className={`dropdownItem ${currency === item ? "active" : ""}`}
                      onClick={() => {
                        setCurrency(item);
                        setShowCurrency(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="navDropdown">
              <button
                className="navDropdownBtn iconOnly"
                onClick={() => setShowLanguage((prev) => !prev)}
                aria-label={`Language: ${language}`}
              >
                <FontAwesomeIcon icon={faGlobe} />
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {showLanguage && (
                <div className="dropdownMenu">
                  {languages.map((item) => (
                    <div
                      key={item}
                      className={`dropdownItem ${language === item ? "active" : ""}`}
                      onClick={() => {
                        setLanguage(item);
                        setShowLanguage(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="navButton supportBtn">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <span>Support</span>
            </button>

            <button className="navButton primary">Sign in / Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
