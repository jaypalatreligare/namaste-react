import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Loading from "../components/Loading";

const Body = () => {
  console.log("Body Component Called");

  // State for fetched product data
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [ratingValue, setRatingValue] = useState("0"); // Default "All"
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const json = await response.json();
      console.log("Fetched Data:", json.products);
      setProducts(json.products); // Store API products
      setFilteredProducts(json.products); // Initial list
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Ensure loading stops after fetching
    }
  };

  // Handle filtering based on rating
  const handleFilter = () => {
    console.log("Filtering with Rating:", ratingValue);
    if (ratingValue === "0") {
      setFilteredProducts(products); // Show all if "All" is selected
    } else {
      let filtered = products.filter(
        (product) => product.rating >= parseFloat(ratingValue)
      );
      setFilteredProducts(filtered);
    }
  };

  // Handle search functionality
  const handleSearch = () => {
    console.log("Searching for:", searchText);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // ✅ Show loading while fetching data
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="body">
      {/* Rating Filter Section */}
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search products..."
        />
        <button className="filter-button" onClick={handleSearch}>
          Search
        </button>

        <label>Select Rating: </label>
        <select
          onChange={(e) => setRatingValue(e.target.value)}
          value={ratingValue}
        >
          <option value="0">All</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <button className="filter-button" onClick={handleFilter}>
          Filter Top Rated
        </button>
      </div>

      {/* Product Listing */}
      <div className="res-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <RestaurantCard key={product.id} resData={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 font-semibold">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Body;
