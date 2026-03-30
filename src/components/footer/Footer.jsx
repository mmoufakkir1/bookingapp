import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const footerLinks = {
  explore: {
    title: "Explore",
    links: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  accommodation: {
    title: "Accommodation",
    links: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  trips: {
    title: "Trips",
    links: [
      "Unique places to stay",
      "Reviews",
      "Travel communities",
      "Seasonal and holiday deals",
      "Online check-in",
    ],
  },
  support: {
    title: "Support & Info",
    links: [
      "Customer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
    ],
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerCallToAction">
          <div className="ctaText">
            <span className="ctaTitle">Save time, save money</span>
            <span className="ctaDesc">Sign up and we'll send the best deals to you</span>
          </div>
          <div className="ctaForm">
            <input type="email" placeholder="Enter your email" className="ctaInput" />
            <button className="ctaBtn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footerMain">
        <div className="fLists">
          {Object.entries(footerLinks).map(([key, section]) => (
            <ul key={key} className="fList">
              <li className="fListTitle">{section.title}</li>
              {section.links.map((link) => (
                <li key={link} className="fListItem">
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerApps">
          <span className="appText">Get the app - it's free</span>
          <div className="appButtons">
            <button className="appBtn">
              <span className="appIcon">🍎</span>
              <span className="appStoreText">
                <small>Download on the</small>
                <br />App Store
              </span>
            </button>
            <button className="appBtn">
              <span className="appIcon">▶</span>
              <span className="appStoreText">
                <small>GET IT ON</small>
                <br />Google Play
              </span>
            </button>
          </div>
        </div>

        <div className="footerCurrency">
          <div className="currencyRow">
            <span className="currencyLabel">Currency</span>
            <span className="currencyValue">USD</span>
          </div>
          <div className="currencyRow">
            <span className="currencyLabel">Language</span>
            <span className="currencyValue">English (US)</span>
          </div>
        </div>
      </div>

      <div className="footerLegal">
        <div className="fText">
          <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
        </div>
        <div className="fLogos">
          <span className="companyLogo">Booking.com</span>
          <span className="companyLogo">Priceline</span>
          <span className="companyLogo">Kayak</span>
          <span className="companyLogo">OpenTable</span>
        </div>
        <div className="fCopyright">
          <div className="fText">Copyright © 1996–2025 Booking.com™. All rights reserved.</div>
          <div className="fLinks">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Cookie Statement</Link>
            <Link to="/">Cookie settings</Link>
          </div>
        </div>
        <div className="fSocial">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
