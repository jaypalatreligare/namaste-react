import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [ratingValue, setRatingValue] = useState("");

  let recipesAll = [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      cuisine: "Italian",
      caloriesPerServing: 300,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 3,
      reviewCount: 98,
    },
    {
      id: 2,
      name: "Spicy Thai Noodles",
      cuisine: "Thai",
      caloriesPerServing: 400,
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 2,
      reviewCount: 120,
    },
    {
      id: 3,
      name: "Cheeseburger",
      cuisine: "American",
      caloriesPerServing: 550,
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      rating: 4.2, // Lower rating (Won't be included in top-rated filter)
      reviewCount: 80,
    },
    {
      id: 4,
      name: "Sushi Rolls",
      cuisine: "Japanese",
      caloriesPerServing: 250,
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      rating: 4.9,
      reviewCount: 150,
    },
  ];

  let [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Classic Margherita Pizza",
      cuisine: "Italian",
      caloriesPerServing: 300,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 3,
      reviewCount: 98,
    },
    {
      id: 2,
      name: "Spicy Thai Noodles",
      cuisine: "Thai",
      caloriesPerServing: 400,
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 2,
      reviewCount: 120,
    },
    {
      id: 3,
      name: "Cheeseburger",
      cuisine: "American",
      caloriesPerServing: 550,
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      rating: 4.2, // Lower rating (Won't be included in top-rated filter)
      reviewCount: 80,
    },
    {
      id: 4,
      name: "Sushi Rolls",
      cuisine: "Japanese",
      caloriesPerServing: 250,
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      rating: 4.9,
      reviewCount: 150,
    },
  ]);

  const handleFilter = () => {
    let filteredRecipes = recipesAll.filter((res) => res.rating > ratingValue);
    setRecipes(filteredRecipes);
    console.log("recipes-------", recipes);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setRatingValue(e.target.value);
          }}
          value={ratingValue}
        />
        <button className="filter-button" onClick={handleFilter}>
          {" "}
          Top Rated{" "}
        </button>
      </div>
      <div className="res-container">
        {/*  <RestaurantCard  resData = {dataObj.recipes[0]}/> */}
        {recipes.map((recipe) => (
          <RestaurantCard key={recipe?.id} resData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Body;
