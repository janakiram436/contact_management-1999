const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    contactId: { type: String, unique: true }, // Explicitly defining contactId
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
  },
  { timestamps: true }
);

// Transform `_id` to `contactId` in JSON response
contactSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.contactId = ret._id; // Assign MongoDB _id to contactId
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("Contact", contactSchema);
