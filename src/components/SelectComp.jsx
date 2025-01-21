const SelectComp = ({setUserInput}) => {
  return (
    <aside className="filter_elm">
      <select name="select" id="select" onChange={(e)=>{setUserInput(e.target.value.toLowerCase())}}>
        <option hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="">All</option>
      </select>
    </aside>
  );
};

export default SelectComp;
