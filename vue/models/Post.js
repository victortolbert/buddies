import Model from "./Model";
import Comment from './Comment'
import Tag from './Tag'
import User from './User'

export default class Post extends Model {
  comments() {
    return this.hasMany(Comment)
  }

  // relations() {
  //   return {
  //     user: User,
  //     'relationships.tags': Tag
  //   }
  // }

  relations() {
    return {
      'relationships.user': User,
      'relationships.comments': Comment
    }
  }
}
