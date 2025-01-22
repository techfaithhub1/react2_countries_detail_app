import SearchComp from "./SearchComp.jsx";
import SelectComp from "./SelectComp.jsx";

const SearchFilterComp = ({setUserInput}) => {
  return (
    <section className="search_filter">
      <SearchComp setUserInput={setUserInput} />
      <SelectComp setUserInput={setUserInput} />
    </section>
  );
};

export default SearchFilterComp;
