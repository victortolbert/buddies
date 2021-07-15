import { useHistory } from "react-router-dom";
import NewPlantForm from "../components/plants/NewPlantForm";

const NewPlantPage = () => {
  const history = useHistory();

  function addPlantHandler(plantData) {
    fetch(
      "https://react-getting-started-4e07e-default-rtdb.firebaseio.com/plants.json",
      {
        method: "POST",
        body: JSON.stringify(plantData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Plant</h1>
      <NewPlantForm onAddPlant={addPlantHandler} />
    </section>
  );
};

export default NewPlantPage;
