const { Schema, model } = require("mongoose");
const responseSchema = require("./Response");
const dateFormat = require("../utils/dateFormat");

const PostSchema = new Schema(
  {
    postText: {
      type: String,
      required: "You need a post!",
      minlength: 1,
      maxlength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    responses: [responseSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

PostSchema.virtual("responseCount").get(function () {
  return this.responses.length;
});
const Post = model("Post", PostSchema);

module.exports = Post;
