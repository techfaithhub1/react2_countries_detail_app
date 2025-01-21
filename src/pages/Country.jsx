import { useContext } from "react";
import CountryDetails from "../components/CountryDetails";
import {Context} from "../context/Context.js";

const Country = () => {
  const {isDark} = useContext(Context);
  return (
    <main className={`country_container ${isDark?"dark":""}`}>
      <section className="btns">
        <button className="back_btn" onClick={()=>{history.back()}}>
          <i className="fa-sharp fa-solid fa-arrow-left"> Back</i>
        </button>
        <button
          className="country_btn btn btn-sm md light_md hide"
          title="Go to main Country"
        >
          MainCountry
        </button>
      </section>
      <section className="country_detail md">
        <CountryDetails />
      </section>
    </main>
  )
}

export default Country;