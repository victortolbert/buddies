import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./PlantItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const PlantItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <div className={classes.item}>
      <Card>
        <ul>
          <li>
            <img
              className={classes.image}
              src={props.image}
              alt={props.commonName}
            />
          </li>
          <li>{props.commonName}</li>
          <li>{props.scientificName}</li>
          <li>{props.toxicityProperty}</li>
          <li>{props.toxicitySymptoms}</li>
          <li>{props.details}</li>
        </ul>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default PlantItem;
