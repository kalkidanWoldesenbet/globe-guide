# 🌍 GlobeGuide

GlobeGuide is a React-based country discovery application that allows users to explore countries around the world. Users can search and filter countries, view detailed country information, and save countries to a personal wishlist.

## ✨ Features

- 🌍 Browse countries from an external API
- 🔎 Search countries by name
- 🗺️ Filter countries by region
- ❤️ Add and remove countries from a wishlist
- 💾 Persist wishlist data using LocalStorage
- 📄 View detailed information about individual countries
- 🏳️ Display country flags
- 🌐 View country capital, region, population, and languages
- 🧭 Navigate between pages using React Router
- ⏳ Loading states while fetching data
- ⚠️ Error handling for failed API requests
- 🚫 Empty search result handling
- 📱 Responsive design for desktop, tablet, and mobile

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- LocalStorage
- Countries.dev API

## 📁 Project Structure

```text
globe-guide/
├── public/
│
├── src/
│   ├── components/
│   │   ├── CountryCard.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── WishlistPage.jsx
│   │   └── CountryDetails.jsx
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

🚀 Getting Started
Prerequisites

Before running the project, make sure you have installed:

Node.js
npm

You can verify your installation with:

node -v
npm -v
Installation
Clone the repository:
git clone REPOSITORY_URL
Navigate to the project directory:
cd globe-guide
Install the project dependencies:
npm install
Start the development server:
npm run dev
Open the local development URL provided by Vite in your browser.
🔌 API

GlobeGuide uses the Countries.dev API to retrieve country information.

The application uses data including:

Country name
Capital
Region
Population
Languages
Country codes
Country flags
🧭 Application Routes
Route	Description
/	Explore, search, and filter countries
/wishlist	View saved countries
/country/:code	View detailed information about a country
🔎 Search and Filtering

The Explore page allows users to search for countries by name.

Users can also filter countries by region:

Africa
Americas
Asia
Europe
Oceania

Search and region filtering can be used together to find specific countries more easily.

❤️ Wishlist

Users can save countries to their wishlist by clicking the Add to Wishlist button.

The wishlist supports:

Adding countries
Removing countries
Displaying the wishlist count
Viewing saved countries
Persisting saved countries after a page refresh

Wishlist data is stored in the browser using LocalStorage.

📄 Country Details

Each country has a dedicated details page.

Users can click View Details from a country card to view:

🏳️ Country flag
🌍 Country name
🏛️ Capital
🗺️ Region
👥 Population
🗣️ Languages
⏳ Loading and Error Handling

The application displays a loading message while country data is being retrieved from the API.

If the API request fails, an error message is displayed to the user.

The application also handles searches that return no matching countries.

For example:

No countries found.

📱 Responsive Design

GlobeGuide uses responsive CSS to provide a consistent experience across different screen sizes.

The application supports:

Desktop
Tablet
Mobile
🎯 Assignment Requirements

This project demonstrates the following React and web development concepts:

API integration
Data-driven rendering
React functional components
React Hooks
State management with useState
Side effects with useEffect
Search functionality
Region filtering
Wishlist functionality
LocalStorage persistence
React Router
Dynamic routes
Conditional rendering
Loading and error handling
Responsive CSS
Reusable components
🧩 Main Components
Navbar

Provides navigation between the Explore and Wishlist pages and displays the current wishlist count.

CountryCard

Displays basic information about a country and provides actions to view country details and add or remove the country from the wishlist.

HomePage

Handles country data fetching, searching, filtering, and displaying country cards.

WishlistPage

Displays all countries saved by the user.

CountryDetails

Displays detailed information about a selected country based on its country code.

🔮 Future Improvements

Possible future improvements include:

📍 Discover popular places and attractions
🏛️ Display famous landmarks
🖼️ Add images for tourist destinations
🗺️ Add interactive maps
⭐ Add ratings and reviews
🌤️ Add local weather information
🔐 Add user authentication
🌐 Add multilingual support
📸 Screenshots



👩‍💻 Author

Kalkidan Woldesenbet

Computer Science Graduate | Junior Software Engineer / Web Developer

📄 License

This project was created for educational and portfolio purposes.