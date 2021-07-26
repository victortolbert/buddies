import Model from "./Model";

export default class Movie extends Model {
  resource() {
    return "movies";
  }
}
