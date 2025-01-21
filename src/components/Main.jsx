import { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import SearchFilterComp from "./SearchFilterComp";
import {Context} from "../context/Context.js"

const Main = () => {
  const [userInput, setUserInput] = useState("");
  const {isDark} = useContext(Context);
  return (
    <main className={`main_container ${isDark?"dark":""}`}>
      <SearchFilterComp setUserInput={setUserInput} />
      <CountriesList userInput={userInput} />
    </main>
  );
};

export default Main;
