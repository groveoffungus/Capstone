import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9]*$/
  },
  dataPoint: {
    type: Boolean,
    default: true,
    required: true
  },
  point: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9]*$/
  },
  type: {
    type: String,
    required: true,
    enum: ["natural feature", "human made", "remains", "other"]
  },
  lat: {
    type: Number,
    required: true,
    validate: /^[0-9.-]*$/
  },
  lon: {
    type: Number,
    required: true,
    validate: /^[0-9.-]*$/
  },
  notes: [String]
});

const Point = mongoose.model("Point", pointSchema);

export default Point;
