import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const { code } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(
          `https://countries.dev/alpha/${code}`
        );

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();
        setCountry(data);
      } catch (error) {
        setError("Unable to load country details.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [code]);

  if (loading) {
    return <p className="status-message">Loading country...</p>;
  }

  if (error) {
    return <p className="status-message">{error}</p>;
  }

  return (
    <main className="country-details">
      <Link to="/" className="back-btn">
         ← Back to Countries
      </Link>
      <img
        src={country.flags?.svg || country.flags?.png}
        alt={`${country.name} flag`}
        className="details-flag"
      />

      <div className="details-info">
        <h1>{country.name}</h1>

        <p>
          <strong>Capital:</strong> {country.capital || "N/A"}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <p>
          <strong>Languages:</strong>{" "}
          {country.languages?.map((language)=> language.name).join(", ") || "N/A"}
        </p>
      </div>
    </main>
  );
}

export default CountryDetails;