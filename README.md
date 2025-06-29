# Booking.com Clone - React Application

A comprehensive travel booking platform built with React that simulates the functionality of Booking.com. This application provides a modern, responsive interface for booking hotels, flights, car rentals, attractions, and airport taxis.

## 🚀 Features

### Core Functionality
- **Multi-service Booking**: Hotels, Flights, Car Rentals, Attractions, Airport Taxis
- **Advanced Search**: Date range picker, guest/room counters, destination autocomplete
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Interactive Components**: Tabbed search interface, dropdown menus, rating systems

### Hotel Booking Features
- Property listings with detailed information
- Room type selection with pricing
- Amenity filtering and display
- Guest reviews and ratings
- Booking policies and cancellation information

### Flight Booking Features
- Flight search with departure/arrival locations
- Airline selection and filtering
- Flight duration and stop information
- Seat availability and pricing
- Booking policies and refund options

### Car Rental Features
- Vehicle type selection (Economy, SUV, Luxury, Electric)
- Rental company filtering
- Insurance options and pricing
- Pickup/drop-off location management
- Vehicle features and specifications

## 🏗️ Project Structure

```
bookingapp/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── airportTaxiItem/    # Airport taxi listing component
│   │   ├── attractionItem/     # Attraction listing component
│   │   ├── carRentalItem/      # Car rental listing component
│   │   ├── featured/           # Featured destinations component
│   │   ├── featuredProperties/ # Featured properties component
│   │   ├── flightItem/         # Flight listing component
│   │   ├── footer/             # Footer component
│   │   ├── header/             # Main search header component
│   │   ├── mailList/           # Newsletter subscription component
│   │   ├── navbar/             # Navigation bar component
│   │   ├── propertyList/       # Property type browsing component
│   │   └── searchItem/         # Search result item component
│   ├── data/               # Mock data and constants
│   │   ├── airportTaxis.js     # Airport taxi data
│   │   ├── attractions.js      # Attraction data
│   │   ├── carRentals.js       # Car rental data
│   │   ├── flights.js          # Flight data
│   │   └── hotels.js           # Hotel data
│   ├── pages/              # Page components
│   │   ├── home/               # Home page
│   │   ├── hotel/              # Hotel detail page
│   │   └── list/               # Search results page
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom components
- **Icons**: Font Awesome
- **Date Handling**: React Date Range + date-fns
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bookingapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎯 Key Components

### Header Component (`src/components/header/Header.jsx`)
The main search interface with:
- Multi-tab search system (Hotels, Flights, Car Rentals, etc.)
- Date range picker for bookings
- Guest/room counter with increment/decrement functionality
- Destination autocomplete with keyboard navigation
- Search functionality with navigation to results

### Home Page (`src/pages/home/Home.jsx`)
The landing page featuring:
- Hero section with search functionality
- Featured destinations showcase
- Property type browsing
- Featured properties recommendations
- Newsletter subscription
- Footer with additional links

### Data Structure
The application uses comprehensive mock data including:
- **Hotels**: 5 detailed hotel listings with room types, amenities, policies
- **Flights**: 6 flight options with airline details, pricing, amenities
- **Car Rentals**: 5 rental options with vehicle specs, pricing, insurance
- **Attractions**: Tourist attractions with descriptions and pricing
- **Airport Taxis**: Transportation options with pricing and features

## 🎨 UI/UX Features

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interfaces

### Interactive Elements
- Hover effects and transitions
- Loading states and animations
- Form validation and feedback
- Keyboard navigation support

### Accessibility
- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility

## 🔧 Customization

### Adding New Data
To add new hotels, flights, or other services:

1. **Edit the appropriate data file** in `src/data/`
2. **Follow the existing data structure**
3. **Update any related components** that use the data

### Styling Modifications
- CSS files are organized by component
- Global styles in `src/index.css`
- Component-specific styles in their respective folders

### Component Development
- Each component is self-contained with its own CSS file
- Components follow a consistent naming convention
- Props are documented in component comments

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Various Platforms
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **Heroku**: Use the buildpack for Create React App

## 📝 Code Quality

### Comments and Documentation
- Comprehensive JSDoc comments for all components
- Inline comments explaining complex logic
- Clear variable and function naming
- Structured component documentation

### Best Practices
- Functional components with hooks
- Proper prop validation
- Clean and maintainable code structure
- Consistent formatting and indentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from Booking.com
- Icons provided by Font Awesome
- Images from Unsplash and Booking.com
- Date handling with react-date-range and date-fns

## 📞 Support

For questions or support, please open an issue in the GitHub repository or contact the development team.

---

**Note**: This is a demonstration project built for educational purposes. It uses mock data and does not include actual booking functionality or payment processing.
