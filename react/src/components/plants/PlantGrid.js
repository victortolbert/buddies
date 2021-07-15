import PlantItem from "./PlantItem";
import classes from "./PlantList.module.css";

const PlantList = (props) => {
  return (
    <ul className={classes.list}>
      {props.plants.map((plant) => (
        <PlantItem
          key={plant.id}
          id={plant.id}
          image={plant.image}
          title={plant.title}
          address={plant.address}
          description={plant.description}
        />
      ))}
    </ul>
  );
};

export default PlantList;
