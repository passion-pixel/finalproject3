var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  question : String,
  description: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
