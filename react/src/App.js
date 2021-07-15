import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllPlantsPage from "./pages/AllPlants";
import FavoritesPage from "./pages/Favorites";
import NewPlantPage from "./pages/NewPlant";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllPlantsPage />
          </Route>
          <Route path="/new-plant">
            <NewPlantPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
