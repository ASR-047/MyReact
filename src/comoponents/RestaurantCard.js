import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    costForTwo,
    cuisines,
    avgRating,
    

    //destructuring sla as it is nested inside info.
    sla,
  } = resData?.info;

  //console.log("Restaurant Data:", resData);
  // const discountHeader = aggregatedDiscountInfoV3?.header;
  // const discountSubHeader = aggregatedDiscountInfoV3?.subHeader;
  

  return (
    <div className="res-card m-4 p-4 w-[200] px-4 border max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 hover:scale-105 hover:bg-gray-400 transition-transform duration-300 ease-in-out">
      <img
        className="card-logo rounded-lg"
        alt="card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-bold py-4">{name}</div>
      <div>{costForTwo}</div>
      <div>{cuisines.join(",")}</div>
      <div>{avgRating}⭐️</div>
      <div>{sla.slaString}</div>

      

    </div>
  );
};
//withPromotedLabel is the higher order component which takes a component (ResturantCard)as an input
//  and return a component(enhanced component) this is a restaurant card with promoted label on it
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {//this is a component which is returned by withPromotedLabel component which will return a peice of jsx
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
//export const withAggregartedValue=(resData) =>{
//   return(props) => {

//     return (
//       <div>
//         <h3>{
//         }</h3>
//         <ResturantCard {...props}/>
//       </div>
//     )
//   }
// }
export const withDiscountedRestaurant = (ResturantCard) => {
  return (props) => {
    const { resData } = props;
    const aggregatedDiscountInfoV3 = resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        {/* Displaying aggregated value (discount info) */}
        {aggregatedDiscountInfoV3 ? (
          <div className="text-sm text-green-600 absolute m-2 p-2 bg-black ">
            {aggregatedDiscountInfoV3.header} -{" "}
            {aggregatedDiscountInfoV3.subHeader}
          </div>
        ) : null}
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
