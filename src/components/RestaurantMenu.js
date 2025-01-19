
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import  RestaurantCategory  from "./RestaurantCategory";

const RestaurantMenu = (() => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo.length === 0) {
        return (<Shimmer />);
    }
    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((C)=> C.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory')
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories?.map((category,index)=>(
                <RestaurantCategory data={category.card.card} key={index}/>
            ))}
            
            {/* <h2>Menu</h2>
            <ul>
                {itemCards?.map(item => <li key={item.card.info.id}>{item.card.info.name} - {" "} - {item.card.info.price / 100 || item.card.info.defaultprice / 100}</li>)}
            </ul> */}
        </div>
    )
})
export default RestaurantMenu