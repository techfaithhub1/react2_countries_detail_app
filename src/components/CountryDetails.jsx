import { useEffect, useId, useState } from "react";
import useFetchData from "./useFetchData";
import { Link, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import CountryShimmer from "../../src/components/CountryShimmer.jsx";

const CountryDetails = () => {
  const params = useParams();
  const countryName = params.country;
  // const {state} = useLocation(); take from other page 
  const [countryData, setCountryData] = useState(null);
  const id = useId();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  let  [cData, err] =  useFetchData(`name/${countryName}?fullText=true`);
  // cData = cData==[]?cData:[state];

  useEffect(() => {
    if (cData[0]) {
      setCountryData({
        flag: cData[0].flags.svg,
        name: cData[0].name.common,
        nativeName: Object.values(cData[0].name.nativeName || {})[0]?.common,
        population: cData[0].population.toLocaleString("en-IN"),
        region: cData[0].region,
        subregion: cData[0].subregion,
        capital: cData[0].capital,
        tld: cData[0].tld[0],
        currencies: Object.values(cData[0].currencies || {})[0]?.symbol,
        languages: Object.values(cData[0].languages || {}).join(", "),
        borders: [],
      });
      
      if(cData[0].borders == null){
        cData[0].borders = [];
      }
      Promise.all(cData[0]?.borders?.map((border) => {
        return fetch(`${BASE_URL}/alpha/${border}`)
          .then((res) => res.json())
          .then((data) => data[0].name.common);
      })).then((allBorders)=>{
        setCountryData((preState)=> ({...preState, borders: allBorders}));
      });
    }
  }, [cData, countryName]);

  if (err) {
    return <NotFound />;
  }
  if (!countryData) {
    return <CountryShimmer />
  }
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryData;

  return (
    <>
      <div className="img_elm">
        <img src={flag} alt={`flag`} />
      </div>
      <div className="content_elm">
        <h2>{name}</h2>
        <div className="top_elm">
          <div className="left_elm">
            <p>
              <b>NativeName : </b>
              {nativeName}
            </p>
            <p>
              <b>Population : </b>
              {population}
            </p>
            <p>
              <b>Region : </b>
              {region}
            </p>
            <p>
              <b>Sub Region : </b>
              {subregion}
            </p>
            <p>
              <b>Capital : </b>
              {capital}
            </p>
          </div>
          <div className="right_elm">
            <p>
              <b>TL Domain : </b>
              {tld}
            </p>
            <p>
              <b>Currencies : </b>
              {currencies}
            </p>
            <p>
              <b>Languages : </b>
              {languages}
            </p>
          </div>
        </div>
        <div className="bottom_elm">
          <p className="b_country">
            <b>Border Countries : </b>
            {borders.map((border, idx) => {
              return (
                <button key={idx + id}>
                  <Link className="link" to={`/${border}`}>
                    {border}
                  </Link>
                </button>
            )
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
