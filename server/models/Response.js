const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const responseSchema = new Schema(
  {
    responseText: {
      type: String,
      required: "Enter your response.",
      maxlength: 300,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = responseSchema;