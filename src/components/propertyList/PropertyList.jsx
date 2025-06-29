/**
 * Property List Component
 * 
 * This component displays different types of properties available
 * for booking, such as hotels, apartments, resorts, villas, and cabins.
 * It helps users browse and filter by property type.
 * 
 * Features:
 * - Grid layout of property type cards
 * - Property type images with overlay text
 * - Property count display for each type
 * - Responsive design for different screen sizes
 * 
 * The component is used on the home page to help users
 * explore different types of accommodations.
 * 
 * @component
 * @returns {JSX.Element} Grid of property type cards
 */
import "./propertyList.css";
import { propertyTypes } from "../../data/propertyTypes";

const PropertyList = () => {
  return (
    <div className="pList">
      {/* Map through property types from data file */}
      {propertyTypes.map((propertyType) => (
        <div key={propertyType.id} className="pListItem">
          <img
            src={propertyType.image}
            alt={propertyType.alt}
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>{propertyType.name}</h1>
            <h2>{propertyType.count} hotels</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
