import { CDN_URL } from "../utils/Constants";
const RestaurantCard = (props) => {
  const { name, locality, avgRating, cloudinaryImageId, cuisines } = props?.resData;

  return (
    <div className="m-2 p-2 w-[150px] rounded-lg hover:bg-gray-400" >
      <img
        className="rounded-lg"
        alt="img-logo"
        src={CDN_URL + "/" + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="text-base break-words">{locality}</h4>
      <h4 className="text-base break-words">{cuisines}</h4>
      <h4>34 mins</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return ((props)=>{
    return(
      <div>
        <label>Promoted</label>
          <RestaurantCard {...props} />
      </div>
    )
  })
}
export default RestaurantCard;