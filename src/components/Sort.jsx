const Sort = ({ setSort }) => (
  <select onChange={e => setSort(e.target.value)}>
    <option value="">Sort</option>
    <option value="priceLow">Low to High</option>
    <option value="priceHigh">High to Low</option>
    <option value="rating">Rating</option>
  </select>
);
export default Sort;