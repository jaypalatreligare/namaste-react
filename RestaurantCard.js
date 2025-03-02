const RestaurantCard = ({ resData }) => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      {/* Product Image */}
      <img
        className="product-image"
        src={resData.thumbnail} // ✅ Corrected image field
        alt={resData.title}
        style={{ width: "100%", borderRadius: "8px", height: "150px", objectFit: "cover" }}
      />

      {/* Product Details */}
      <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>{resData.title}</h3>
      <p style={{ color: "gray", fontSize: "14px" }}>{resData.brand}</p>
      <p style={{ fontWeight: "bold", color: "#4CAF50" }}>⭐ {resData.rating}</p>
      <p style={{ fontSize: "14px", fontWeight: "bold" }}>💰 Price: ${resData.price}</p>
    </div>
  );
};

export default RestaurantCard;
