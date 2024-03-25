import { Router } from "express";
import Point from "../models/Project.js";

const router = Router();

// Create point route
router.post("/", async (request, response) => {
  try {
    const newPoint = new Point(request.body);

    const data = await newPoint.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all points route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Point.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single point by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Point.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a point by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Point.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single point by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Point.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          type: body.type,
          lat: body.lat,
          lon: body.lon,
          notes: body.notes
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
