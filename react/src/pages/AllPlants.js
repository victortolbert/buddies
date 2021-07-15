import { useState, useEffect } from "react";
import PlantList from "../components/plants/PlantList";

const AllPlantsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlants, setLoadedPlants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-4e07e-default-rtdb.firebaseio.com/plants.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const plants = [];

        for (const key in data) {
          const plant = {
            id: key,
            ...data[key],
          };

          plants.push(plant);
        }

        setIsLoading(false);
        setLoadedPlants(plants);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Plants</h1>
      <PlantList plants={loadedPlants} />
    </section>
  );
};

export default AllPlantsPage;
