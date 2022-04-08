const mongoose = require("mongoose");
const { Schema } = mongoose;
const docShema = new Schema({
  createdAt: {
    type: Date,
    default: new Date(Date.now()).toLocaleDateString(),
  },
});
