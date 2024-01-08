import mongoose from "mongoose"
import { User } from "../models/user"

export const connectDb = async () => {
  try{
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    })

    console.log("db connected...");

    //testing and creating new user

    /*
    const user01 = new User({
      name: "test name",
      email: "test@email.com",
      password: "testtest",
      about: "this is testing",
    })

    await user01.save()
    console.log("user is created..")

    //user created in mongdb
    */

    //console.log(connection);
    //console.log(connection.host); //ac-g9jycyc-shard-00-00.juzaqj1.mongodb.net
  }
  catch(error){
    console.log("failed to connect with database");
    console.log(error);
  }
}