/**
 * Home Page Component
 * 
 * This is the main landing page of the booking application that displays:
 * - Navigation bar with user controls
 * - Hero header with search functionality
 * - Featured destinations section
 * - Property type browsing section
 * - Featured properties section
 * - Newsletter subscription
 * - Footer with additional links
 * 
 * The component serves as the primary entry point for users to search
 * for accommodations and explore available properties.
 * 
 * @component
 * @returns {JSX.Element} The complete home page layout
 */
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      {/* Top navigation bar with logo and user authentication buttons */}
      <Navbar />
      
      {/* Hero section with search functionality and promotional content */}
      <Header/>
      
      {/* Main content container with all home page sections */}
      <div className="homeContainer">
        {/* Featured destinations section - showcases popular cities */}
        <Featured/>
        
        {/* Property type browsing section */}
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        
        {/* Featured properties section - highlights recommended accommodations */}
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        
        {/* Newsletter subscription section for user engagement */}
        <MailList/>
        
        {/* Footer with links, social media, and company information */}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
