import { Routes,Route  } from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import { useEffect,useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import CountryDetails from "./pages/CountryDetails.jsx";

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("globeGuideWishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "globeGuideWishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  function toggleWishlist(country){
    const exists = wishlist.some(
      (item) => item.alpha2Code === country.alpha2Code
    );

    if (exists){
      setWishlist(
        wishlist.filter(
          (item) => item.alpha2Code !==country.alpha2Code
        )
      );
    } else{
      setWishlist([...wishlist, country]);
    }
  }

  return (
    <div className="app">
      <Navbar wishlistCount={wishlist.length}/>

      <Routes>
        <Route path="/" element={<HomePage 
          wishlist= {wishlist}
          onWishlist={toggleWishlist}
        />} />
        <Route path="/wishlist" 
          element={
            <WishlistPage 
            wishlist={wishlist}
            onWishlist={toggleWishlist}
            />}
        />
        <Route
          path="/country/:code"
          element={<CountryDetails />}
        />
      </Routes>
    </div>
  )
}

export default App
