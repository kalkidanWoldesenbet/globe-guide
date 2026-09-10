import { useEffect,useState } from "react"

function CitiesPage() {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
          async function fetchCities() {
            try {
              setLoading(true);
              setError("");

              const params = new URLSearchParams();

              if (search){
                params.set("q", search);
              }

              if (country){
                params.set("country", country);
              }

              params.set("limit", "30");
            
              const url = `https://countries.dev/cities?${params.toString()}`;
                
            
              const response = await fetch(url);
            
              if (!response.ok) {
                throw new Error("Failed to fetch cities");
              }
          
              const data = await response.json();
          
              setCities(data);
            } catch (error) {
              console.error(error);
              setError("Unable to load cities.");
            } finally {
              setLoading(false);
            }
          }
      
          fetchCities();
        }, 500);

        return () => clearTimeout(timer);
    }, [search, country]);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const response = await fetch(
                    "https://countries.dev/countries"
                );

                if(!response.ok){
                    throw new Error("Failed to fetch countries");
                }

                const data = await response.json();

                setCountries(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchCountries();
    }, []);

    if(error){
        return <p className="status-message">{error}</p>
    }


    
  return (
  <main>
    <section className="hero">
      <h1>Explore Cities 📍</h1>
      <p>Discover cities from around the world.</p>
    </section>

    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    
    <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
    >   
       <option value="">All Countries</option>    
       {countries.map((country) => (
        <option
         key={country.alpha2Code}
         value={country.alpha2Code}
        >
            {country.name}
        </option>
       ))}
    </select>
    </div>
    {loading ? (
      <p className="status-message">Loading cities...</p>
    ) : cities.length === 0 ? (
      <p className="status-message">No cities found</p>
    ) : (
      <div className="city-grid">
        {cities.map((city) => (
          <article
            className="city-card"
            key={`${city.name}-${city.countryCode}`}
          >
            <h2>{city.name}</h2>

            <p>
              <strong>Country:</strong> {city.countryCode}
            </p>

            <p>
              <strong>Population:</strong>{" "}
              {city.population?.toLocaleString() || "N/A"}
            </p>

            <p>
              <strong>Coordinates:</strong>{" "}
              {city.latitude}, {city.longitude}
            </p>
          </article>
        ))}
      </div>
    )}
  </main>
);
}

export default CitiesPage
