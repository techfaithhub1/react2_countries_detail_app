import Card from "./Card";
import CountriesListShimmer from "./CountriesListShimmer.jsx";
import useFetchData from "./useFetchData.js";
// import countriesData from "./countriesData";

const CountriesList = ({ userInput }) => {
  const [cData] = useFetchData(`all`);

  if (cData.length == 0) {
    return <CountriesListShimmer />;
  }
  return (
    <section className="cards_section">
      {cData &&
        cData
          .filter(
            (country) =>
              country.name.common.toLowerCase().includes(userInput) || country.region.toLowerCase().includes(userInput)
          )
          .map((country) => {
            return (
              <Card
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital}
                country={country}
              />
            );
          })}
    </section>
  );
};
export default CountriesList;
