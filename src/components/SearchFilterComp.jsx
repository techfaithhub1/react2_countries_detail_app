import SearchComp from "./SearchComp";
import SelectComp from "./SelectComp";

const SearchFilterComp = ({setUserInput}) => {
  return (
    <section className="search_filter">
      <SearchComp setUserInput={setUserInput} />
      <SelectComp setUserInput={setUserInput} />
    </section>
  );
};

export default SearchFilterComp;
