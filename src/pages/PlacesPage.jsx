import { useEffect, useState } from "react";

function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchPlaces() {
        try {
          setLoading(true);
          setError("");

          const params = new URLSearchParams();

          if (search) {
            params.set("q", search);
          }

          params.set("limit", "30");

          const url = `https://countries.dev/places?${params.toString()}`;

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("Failed to fetch places");
          }

          const data = await response.json();

          setPlaces(data);
        } catch (error) {
          console.error(error);
          setError("Unable to load places.");
        } finally {
          setLoading(false);
        }
      }

      fetchPlaces();
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  if (error) {
    return <p className="status-message">{error}</p>;
  }

  return (
    <main>
      <section className="hero">
        <h1>Explore Places 📍</h1>
        <p>Discover places from around the world.</p>
      </section>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a place..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="status-message">Loading places...</p>
      ) : places.length === 0 ? (
        <p className="status-message">No places found</p>
      ) : (
        <div className="place-grid">
          {places.map((place) => (
            <article
              className="place-card"
              key={place.geonameId}
            >
              <h2>{place.name}</h2>

              <p>
                <strong>Country:</strong>{" "}
                {place.countryCode}
              </p>

              <p>
                <strong>Type:</strong>{" "}
                {place.featureCode}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {place.population?.toLocaleString() || "N/A"}
              </p>

              <p>
                <strong>Coordinates:</strong>{" "}
                {place.latitude}, {place.longitude}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default PlacesPage;