/* const styleCard = {
    backgroundColor: "gray"
}; */
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData----", resData);
  return (
    <>
      <div
        className="res-card"
        style={{
          backgroundColor: "gray",
        }}
      >
        <img className="product-image" src={resData.image} />
        <h3>{resData.name}</h3>

        <h3>{resData.cuisine} </h3>
        <h3>{resData.rating}</h3>
      </div>
    </>
  );
};

export default RestaurantCard;
