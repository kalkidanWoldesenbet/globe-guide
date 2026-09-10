import { NavLink } from "react-router-dom"

function Navbar({ wishlistCount }) {
  return (
      <nav className="navbar">
        <NavLink to="/" end className="navbar-logo">
            🌍 GlobeGuide
        </NavLink>
        <div className="nav-links">
            <NavLink
              to="/"
              end
              className={({isActive}) => 
               isActive ? "nav-link active" : "nav-link"
               }
               >
                Explore
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
             }
            >
              ❤️ Wishlist ({wishlistCount})
            </NavLink>
        </div>
      </nav>
    
  )
}

export default Navbar
