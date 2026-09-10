import CountryCard from "../components/CountryCard"

function WishlistPage( {wishlist, onWishlist}) {
  return (
    <main>
      <section>
        <h1>My Wishlist ❤️</h1>
        <p>Countries you want to explore later</p>
      </section>
    
      {wishlist.length === 0 ? (
        <p className="status-message">
            Your wishlist is empty
        </p>
      ) : (
        <div className="country-grid">
            {wishlist.map((country) => (
                <CountryCard
                  key={country.alpha2Code}
                  country={country}
                  onWishlist={onWishlist}
                  isWishlisted={true}
                />
            ))}
        </div>
      )}

    </main>
  );
}

export default WishlistPage
