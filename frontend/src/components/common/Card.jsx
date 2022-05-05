import React, { useEffect, useState } from 'react';
import { addFavourite } from '../../reducks/favourites/operations';
import { getFavourites } from '../../reducks/favourites/selectors';
import { useSelector, useDispatch } from 'react-redux';
import like from '../../assets/img/like.svg';
// import Places from '../../containers/Places';

const Card = ({ place }) => {
    const dispatch = useDispatch();
    const clickFavourite = place => {
        dispatch(addFavourite(place));
    };
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
        let favoritePlace = favourites.filter(favourite => favourite.id == place.id);
        if (favoritePlace.length > 0) {
            setShowLikeButton(false);
        }
    }, [favourites]);

    return (
        <>
            <div class="gridcontent row">
                <div class="image">
                    <img class="mainimage" src={place.image} alt="" />
                    <div class="like">
                        <img
                            src={like}
                            onClick={() => {
                                clickFavourite(place);
                            }}
                            alt=""
                        />
                    </div>
                </div>
                <div class="textcontent">
                    <div class="gridheading">
                        <h1>{place.name}</h1>
                    </div>
                    <div class="gridsubheading">
                        <h2>{place.place_type}</h2>
                    </div>
                    <div class="gridtext">
                        <p>"Opens"{place.time_to_travel}"hours."</p>

                        <p>{place.description}</p>
                    </div>
                    <div class="input-button">
                        <a href={place.googel_map_link} target="_blank">
                            {' '}
                            Direction{' '}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
