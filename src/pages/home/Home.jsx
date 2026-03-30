import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAward,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const popularDestinations = [
  {
    id: 1,
    city: "New York",
    country: "United States",
    properties: 809,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=270&fit=crop",
    price: "$89",
    rating: 8.5,
  },
  {
    id: 2,
    city: "London",
    country: "United Kingdom",
    properties: 1892,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=270&fit=crop",
    price: "$120",
    rating: 8.7,
  },
  {
    id: 3,
    city: "Paris",
    country: "France",
    properties: 1567,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=270&fit=crop",
    price: "$110",
    rating: 8.6,
  },
  {
    id: 4,
    city: "Tokyo",
    country: "Japan",
    properties: 1203,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=270&fit=crop",
    price: "$95",
    rating: 8.9,
  },
  {
    id: 5,
    city: "Sydney",
    country: "Australia",
    properties: 542,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=270&fit=crop",
    price: "$105",
    rating: 8.4,
  },
  {
    id: 6,
    city: "Barcelona",
    country: "Spain",
    properties: 1234,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=270&fit=crop",
    price: "$98",
    rating: 8.5,
  },
];

const deals = [
  {
    id: 1,
    title: "Weekend Getaways",
    description: "Save up to 20% on weekend stays",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=270&fit=crop",
    badge: "Limited time",
  },
  {
    id: 2,
    title: "Early Bird Deals",
    description: "Book early and save up to 15%",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=270&fit=crop",
    badge: "Best value",
  },
  {
    id: 3,
    title: "Last Minute Deals",
    description: "Spontaneous? Save up to 25%",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=270&fit=crop",
    badge: "Hot deal",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <div className="geniusBanner">
          <div className="geniusContent">
            <div className="geniusIcon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div className="geniusText">
              <h3>Genius - Your loyalty program</h3>
              <p>Earn 10% or more with every booking, plus enjoy free upgrades and benefits.</p>
            </div>
          </div>
          <button className="geniusBtn">Learn more</button>
        </div>

        <section className="section">
          <h2 className="sectionTitle">Popular destinations</h2>
          <p className="sectionSubtitle">Most viewed by travelers</p>
          <div className="popularDestinations">
            {popularDestinations.map((dest) => (
              <Link to="/hotels" key={dest.id} className="popularDestCard">
                <div className="popularDestImage">
                  <img src={dest.image} alt={dest.city} />
                  <div className="popularDestRating">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                <div className="popularDestInfo">
                  <h3>{dest.city}</h3>
                  <p>{dest.country}</p>
                  <div className="popularDestMeta">
                    <span className="properties">{dest.properties} properties</span>
                    <span className="price">from <strong>{dest.price}</strong></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Featured />

        <section className="section">
          <h2 className="sectionTitle">Deals of the day</h2>
          <div className="dealsGrid">
            {deals.map((deal) => (
              <div key={deal.id} className="dealCard">
                <div className="dealImage">
                  <img src={deal.image} alt={deal.title} />
                  <span className="dealBadge">{deal.badge}</span>
                </div>
                <div className="dealInfo">
                  <h3>{deal.title}</h3>
                  <p>{deal.description}</p>
                  <Link to="/hotels" className="dealLink">
                    View deals <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />

        <section className="section ctaSection">
          <div className="ctaCard">
            <div className="ctaContent">
              <h2>List your property</h2>
              <p>Reach millions of travelers and earn extra income.</p>
            </div>
            <button className="ctaButton">Become a host</button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
