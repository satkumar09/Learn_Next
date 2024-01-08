import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email Required!!"],
  },
  password:{
    type: String,
    required: [true, "Password Required!!"],
  },
  about: String,
  profileURL: String,

  //we can also make complex structure like below
  // address:{
  //   street: String,
  //   city: String,
  //   country: String,
  //   pinCode: String,
  // }
})

export const User = mongoose.models.users || mongoose.model("users", UserSchema)