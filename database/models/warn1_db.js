const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
  guildid: { type: String, required: true },
  memberid: { type: String, required: true },
  warnings: 0,
});
module.exports = mongoose.model("warn-members", MessageSchema);
