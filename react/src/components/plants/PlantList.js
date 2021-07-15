import PlantItem from "./PlantItem";
import classes from "./PlantList.module.css";

const PlantList = (props) => {
  return (
    <ul className={classes.list}>
      {props.plants.map((plant) => (
        <PlantItem
          key={plant.id}
          id={plant.id}
          commonName={plant.names.common}
          scientificName={plant.names.scientific}
          toxicityProperty={plant.toxicity?.property || null}
          toxicitySymptoms={plant.toxicity?.symptoms || null}
          image={plant.image}
          details={plant.details}
        />
      ))}
    </ul>
  );
};

export default PlantList;
