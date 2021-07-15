import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => { },
  removeFavorite: (plantId) => { },
  itemIsFavorite: (plantId) => { },
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePlant) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoritePlant);
    });
  }

  function removeFavoriteHandler(plantId) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((plant) => plant.id !== plantId);
    });
  }

  function itemIsFavoriteHandler(plantId) {
    return userFavorites.some((plant) => plant.id === plantId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
