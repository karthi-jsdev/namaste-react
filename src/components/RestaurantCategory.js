import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  //const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4 text-center">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.title} ({data?.categories?.length})
          </span>
          <span className="cursor-pointer" onClick={handleClick}>
            🔽
          </span>
        </div>
        {showItems && (
          <div>
            <div className="flex justify-between">
              <div className="w-full mx-auto bg-gray-50 shadow-lg p-4 my-4 text-center">
                {data?.categories?.map((element, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <span className="font-bold text-lg">
                        {element?.title} ({element?.itemCards?.length})
                      </span>
                      <span className="cursor-pointer" onClick={handleClick}>
                        🔽
                      </span>
                    </div>

                    <div>
                      {showItems && <ItemList items={element} key={index} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
