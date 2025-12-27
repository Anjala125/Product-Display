import { useState } from "react";
import "./App.css";
import products from "./data/product";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "All" || p.category === category)
    .sort((a, b) =>
      sort === "priceLow" ? a.price - b.price :
      sort === "priceHigh" ? b.price - a.price :
      sort === "rating" ? b.rating - a.rating : 0
    );

  return (
    <>
      <Navbar />
      <SearchBar setSearch={setSearch} />
      <Filter setCategory={setCategory} />
      <Sort setSort={setSort} />
      <ProductList products={filtered} />
    </>
  );
}

export default App;