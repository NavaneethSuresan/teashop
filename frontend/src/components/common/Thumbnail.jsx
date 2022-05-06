import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/Like_button.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";

const Thumbnail = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id == place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);
  return (
    <>
      <div class="row">
        <div class="image-container">
          <img src={place.image} alt="" />
        </div>
        <div className="subrow">
          <h4>{place.name}</h4>
          <p>{place.description}</p>
          {showLikeButton && (
            <img
              id="like"
              src={Imglike}
              onClick={() => {
                clickFavourite(place);
              }}
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
