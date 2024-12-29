
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = (() => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo.length === 0) {
        return (<Shimmer />);
    }
    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item => <li key={item.card.info.id}>{item.card.info.name} - {" "} - {item.card.info.price / 100 || item.card.info.defaultprice / 100}</li>)}
            </ul>
        </div>
    )
})
export default RestaurantMenu