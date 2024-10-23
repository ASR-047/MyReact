import {CDN_URL} from "../utils/constants"

const ResturantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      costForTwo,
      cuisines,
      avgRating,
  
  //destructuring sla as it is nested inside info.
      sla
    } = resData?.info;
  
  
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          className="card-logo"
          alt="card-logo"
          src={ CDN_URL
             +
            cloudinaryImageId
          }
        />
        <div>{name}</div>
        <div>{costForTwo}</div>
        <div>{cuisines.join(",")}</div>
        <div>{avgRating}⭐️</div>
        <div>{sla.slaString}</div>
      </div>
    );
  };

  export default ResturantCard;