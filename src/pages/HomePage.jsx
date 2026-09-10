import { useEffect,useState } from "react"
import CountryCard from "../components/CountryCard";

function HomePage({wishlist, onWishlist}) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All")


    useEffect(() =>{
        async function fetchCountries() {
            try {
                const response = await fetch(
                    "https://countries.dev/countries"
                )

                if(!response.ok) {
                    throw new Error("Failed to fetch countries");
                }

                const data = await response.json();
                setCountries(data);

            } catch (error) {
                console.error(error);
                setError("Unable to load countries.");
            } finally {
                setLoading(false);
            }
        }
        fetchCountries();
    }, []);

    if (loading) {
        return <p className="status-message">Loading countries...</p>
    }

    if (error) {
        return <p className="status-message">{error}</p>
    }

    const filteredCountries = countries.filter((country) => {
        const matchesSearch = country.name
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesRegion = 
          region === "All" || country .region === region;

        return matchesSearch && matchesRegion;
})

  return (
    <main>
      <section className="hero">
        <h1>Explore the World 🌍</h1>
        <p>Discover countries, cultures, capitals, and more.</p>
      </section>

      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />

        <select 
            value={region} 
            onChange={(e) => setRegion(e.target.value)}>
                <option value="All">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
      </div>

      
        {filteredCountries.length === 0 ? (
            <p className="status-message">
                No countries found.
            </p>
        ):(
            <div className="country-grid">
                {filteredCountries.map((country) => (
                    <CountryCard
                        key={country.alpha2Code}
                        country={country}
                        onWishlist={onWishlist}
                        isWishlisted={wishlist.some(
                            (item) => item.alpha2Code === country.alpha2Code
                        )}
                    />
                ))
            
                }
            </div>
        )}
      
    </main>
  )
}

export default HomePage
