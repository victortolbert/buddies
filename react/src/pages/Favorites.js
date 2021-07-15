import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import PlantList from "../components/plants/PlantList";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No favorites yet. Add some</p>;
  } else {
    content = <PlantList plants={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
