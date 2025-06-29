/**
 * Main Application Component
 * 
 * This is the root component of the booking application that handles routing
 * and renders the appropriate page components based on the current URL path.
 * 
 * Routes:
 * - "/" - Home page with featured properties and search functionality
 * - "/hotels" - Hotel listing page with search results
 * - "/hotels/:id" - Individual hotel detail page
 * 
 * @component
 * @returns {JSX.Element} The main application with routing
 */
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    // Main routing container that handles all application navigation
    <Routes>
      {/* Home page route - displays featured properties and search interface */}
      <Route path="/" element={<Home/>}/>
      
      {/* Hotel listing page - shows search results with filters */}
      <Route path="/hotels" element={<List/>}/>
      
      {/* Individual hotel detail page - displays specific hotel information */}
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
  );
}

export default App;
