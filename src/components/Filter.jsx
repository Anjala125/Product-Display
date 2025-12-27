const Filter = ({ setCategory }) => (
  <select onChange={e => setCategory(e.target.value)}>
    <option value="All">All</option>
    <option value="Category A">Category A</option>
    <option value="Category B">Category B</option>
  </select>
);
export default Filter;