
const SearchComp = ({setUserInput}) => {
  return (
    <aside className="search_elm light_md md">
      <input
        type="text"
        id="country"
        placeholder="Country Name"
        className="md light_md"
        onChange={(e)=>{setUserInput(e.target.value)}}
      />
      <i
        className="fa-solid fa-magnifying-glass search"
        title="Search Country"
      />
    </aside>
  );
};

export default SearchComp;
