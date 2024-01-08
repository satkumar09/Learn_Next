import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  content :{
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },

  // to link user from task we take the userId and include it in task schema
  userId: {
    type: mongoose.mongoose.ObjectId,
    required: true,
  },
})

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema)