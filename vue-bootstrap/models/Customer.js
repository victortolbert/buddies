import Model from "./Model";

export default class Customer extends Model {
  resource() {
    return "customers";
  }
}
