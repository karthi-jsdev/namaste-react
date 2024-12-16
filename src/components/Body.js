
import RestaurantCard from "./RestaurantCard"; 
import allResData from "../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-conatiner">
          {allResData.map((restaurant) => {
            const { info } = restaurant.card.card;
            return <RestaurantCard key={info.id} resData={info} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;