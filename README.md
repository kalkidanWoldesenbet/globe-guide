# 🌍 GlobeGuide

GlobeGuide is a React-based travel discovery application that helps users explore countries, cities, and places around the world.

The project was built as a data-driven React application using a public API, with search, filtering, country details, and wishlist functionality.

## ✨ Features

- 🌍 Browse countries from around the world
- 🔎 Search countries by name
- 🗺️ Filter countries by region
- 📍 Explore cities around the world
- 🔎 Search cities by name
- 🌎 Filter cities by country
- 🏞️ Explore places using place-name search
- ❤️ Add countries to a personal wishlist
- 💾 Wishlist persists using localStorage
- 📄 View detailed information about individual countries
- ⚡ Loading and error states
- 📱 Responsive design for desktop, tablet, and mobile
- 🧭 Client-side navigation with React Router

## 🛠️ Technologies

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- REST API
- localStorage
- Git & GitHub

## 📡 API

GlobeGuide uses the free and keyless **countries.dev API**.

The API provides country, city, and geographical place data.

Main endpoints used:

```text
https://countries.dev/countries
https://countries.dev/alpha/{countryCode}
https://countries.dev/cities
https://countries.dev/places
📂 Project Structure
src/
├── components/
│   ├── CountryCard.jsx
│   └── Navbar.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── WishlistPage.jsx
│   ├── CountryDetails.jsx
│   ├── CitiesPage.jsx
│   └── PlacesPage.jsx
│
├── css/
│   └── style.css
│
├── App.jsx
└── main.jsx
🚀 Getting Started
1. Clone the repository
git clone GITHUB_REPOSITORY_URL
2. Navigate into the project
cd globe-guide
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will be available through the local Vite development URL.

🧭 Application Routes
Route	Description
/	Explore countries
/wishlist	View saved countries
/country/:code	View country details
/cities	Explore cities
/places	Explore geographical places
❤️ Wishlist

Users can add countries to their wishlist by clicking the Add to Wishlist button.

Wishlist data is stored in the browser's localStorage, allowing saved countries to remain available after refreshing the page.

🔎 Search & Filtering
Countries

Users can:

Search countries by name
Filter countries by region
Browse all available countries
Cities

Users can:

Search cities by name
Filter cities by country
View population and geographical coordinates
Places

Users can:

Search geographical places by name
View country information
View place type
View population
View geographical coordinates
📄 Country Details

Each country has a dedicated details page containing information such as:

Flag
Country name
Capital
Region
Population
Languages
Other available country information
🎨 UI & Responsive Design

The application uses custom CSS with:

Card-based layouts
Responsive grids
Hover effects
Responsive navigation
Mobile-friendly layouts
Loading and error messages
Consistent styling across pages

The layout adapts to different screen sizes including desktop, tablet, and mobile devices.

📋 Assignment Requirements

GlobeGuide satisfies the main requirements of the React data-driven application assignment:

✅ React application
✅ Public API integration
✅ API data fetching
✅ Card-based data display
✅ Search functionality
✅ Category/related filtering
✅ Wishlist functionality
✅ Good CSS styling
✅ Fully functional navigation
✅ Responsive design
🧩 Main Components
Navbar

Provides navigation between the main sections of the application and displays the current wishlist count.

CountryCard

Displays country information and provides links to country details and wishlist functionality.

HomePage

Fetches and displays countries with search and region filtering.

CountryDetails

Displays detailed information for a selected country.

CitiesPage

Fetches city data and provides city search and country filtering.

PlacesPage

Fetches geographical place data and allows users to search for places around the world.

WishlistPage

Displays all countries saved by the user.

🔮 Future Improvements

Possible future improvements include:

🗺️ Interactive maps
📍 More detailed place information
🌤️ Weather information
🏨 Travel and accommodation information
✈️ Travel planning features
🔐 User accounts and cloud-based wishlists
⭐ Ratings and reviews for places
🖼️ Images for cities and places
📸 Screenshots

Screenshots of the application can be added here after deployment.

👩‍💻 Author

Kalkidan Woldesenbet

Computer Science Graduate | Junior Software Engineer / Web Developer

📄 License

This project was created for educational purposes.