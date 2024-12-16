import { CDN_URL } from "../utils/Constants"; 
const RestaurantCard = (props) => {
    const {name,locality,avgRating,cloudinaryImageId,cuisines} = props.resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="img-logo"
        src={CDN_URL+"/"+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines}</h4>
      <h4>34 mins</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;