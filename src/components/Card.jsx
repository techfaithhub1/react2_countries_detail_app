import { Link } from "react-router-dom";

const Card = ({name, flag, population, region, capital, country}) => {
  return (
    <div className="card">
      <Link to={`/${name}`} className="md light_md link" state={country}>
        <img src={flag} alt="country" />
        <div className="card-body md light_md">
          <h4 className="card-title mb-4">
            {name}
          </h4>
          <p className="card-text">
            <b>Population : </b>{population}
          </p>
          <p className="card-text">
            <b>Region : </b>{region}
          </p>
          <p className="card-text">
            <b>Capital : </b>{capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
