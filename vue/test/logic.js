const plants = require('../data/plants')

const toxicPlants = plants.filter(plant => typeof plant.toxicity !== 'undefined')
const nonToxicPlants = plants.filter(plant => typeof plant.toxicity === 'undefined')
