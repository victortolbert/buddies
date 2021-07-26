import Model from "./Model";

export default class User extends Model {
  resource() {
    return "users";
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`
  }

  // Method -> user.makeBirthday()
  makeBirthday() {
    // eslint-disable-next-line no-return-assign
    return this.age += 1
  }

  posts() {
    return this.hasMany(Post)
  }
}
