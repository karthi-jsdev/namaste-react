import { CDN_URL } from "../utils/Constants";

const ItemList = ({ data }) => {
  console.log(data.itemCards);
  // Ensure data.itemCards is an array
  if (!data?.itemCards || !Array.isArray(data.itemCards)) {
    return <div>No items to display</div>;
  }
  return (
    <div >
      {data.itemCards.map((item, index) => (
        <div
          key={item.card.info.id}
          className="flex p-2 m-2 border-gray-200 border-b-2 text-left justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                ${item.card.info.price ? item.card.info.price / 100 : 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-1 bg-black text-white shadow-lg m-auto">Add +</button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-54 w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
