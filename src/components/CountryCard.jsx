import { Link } from "react-router-dom"

function CountryCard({country, onWishlist, isWishlisted }) {
  return (
    <article className="country-card">
      <img 
        src={country.flags?.svg || country.flags.png} 
        alt={`${country.name} flag`}
        className="country-flag" 
        />

      <div className="country-info">
        <h2>{country.name}</h2>
        <p>
            <strong>Capital:</strong>{" "}
            {country.capital || "N/A"}
        </p>

        <p>
            <strong>Region:</strong> {country.region}
        </p>

        <p>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
        </p>

        <Link
            to={`/country/${country.alpha2Code}`}
            className="details-btn"
        >
            View Details
        </Link>
        <button
            onClick={() => onWishlist(country)}
            className={isWishlisted ? "wishlist-btn saved" : "wishlist-btn"}
        >
            {isWishlisted ? "❤️ Saved" : "♡ Add to Wishlist"}
        </button>
      </div>
    </article>
  )
}

export default CountryCard
