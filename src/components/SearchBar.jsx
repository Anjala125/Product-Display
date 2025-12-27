const SearchBar = ({ setSearch }) => (
  <input placeholder="Search..." onChange={e => setSearch(e.target.value)} />
);
export default SearchBar;