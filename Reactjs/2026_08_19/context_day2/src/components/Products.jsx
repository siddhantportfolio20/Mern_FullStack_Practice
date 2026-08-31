import { useEffect, useState } from "react";

const Products = () => {
  // Store products
  const [data, setData] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Search input
  const [searchInput, setSearchInput] = useState("");

  // Actual search value
  const [search, setSearch] = useState("");

  // Sorting value
  const [sort, setSort] = useState("");

  // Fetch products
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await res.json();

      setData(result.products || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component renders
  useEffect(() => {
    fetchData();
  }, []);

  // Search + Sort
  const filteredData = data
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "lowToHigh") {
        return a.price - b.price;
      }

      if (sort === "highToLow") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div>
      <h1>Products List</h1>

      {/* Loading */}
      {loading && <h2>Loading 🔄</h2>}

      {/* Error */}
      {error && <h2>Error: {error}</h2>}

      {!loading && !error && (
        <>
          {/* Search */}
          <input
            type="text"
            placeholder="Search for title"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button onClick={() => setSearch(searchInput)}>
            Search 🔎
          </button>

          {/* Sorting */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>

          {/* Products */}
          {filteredData.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Products;