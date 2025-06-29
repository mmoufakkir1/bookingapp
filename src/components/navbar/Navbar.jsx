/**
 * Navigation Bar Component
 * 
 * This component renders the top navigation bar that appears on all pages.
 * It contains the application logo and user authentication buttons.
 * 
 * Features:
 * - Application branding/logo
 * - User registration button
 * - User login button
 * 
 * The navbar is positioned at the top of every page and provides
 * consistent navigation and branding across the application.
 * 
 * @component
 * @returns {JSX.Element} The navigation bar with logo and auth buttons
 */
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        {/* Application logo/brand name */}
        <span className="logo">Booking.com Clone</span>
        
        {/* User authentication buttons container */}
        <div className="navItems">
          {/* User registration button */}
          <button className="navButton">Register</button>
          
          {/* User login button */}
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar