//we make file route.js to create api

import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb() //db connected... and connection object

//the below functions will simply get called on GET, POST, DELETE, PUT request called on users respectively

//get request function
export async function GET() {
  /*const users = [
    {
      name: "Satyajit Kumar",
      phone: "2525",
      course: "nextjs",
    },
    {
      name: "Rahul Kumar",
      phone: "2345",
      course: "cpp",
    },
    {
      name: "Zaid Affan",
      phone: "9994",
      course: "python",
    },
  ];

  return NextResponse.json(users);

  Output
  Now for GET request:
  (http://localhost:3000/api/users):

  [
    {"name":"Satyajit Kumar","phone":"2525","course":"nextjs"},
    {"name":"Rahul Kumar","phone":"2345","course":"cpp"},
    {"name":"Zaid Affan","phone":"9994","course":"python"}
  ]
  */

  let users = [];
  try{
    users = await User.find()
    //const users = await User.find().select("-password")       -> to hide password from showing during get request
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    })
  }

  return NextResponse.json(users)
}

//post request function
export async function POST(request) {
  //NextRequest and NextResponse:
  /*
  console.log(request.body);
  console.log(request.method);
  console.log(request.cookies);
  console.log(request.nextUrl.pathname);

  return NextResponse.json({
    message: "posting user data"
  })

  //output in console:
  //ReadableStream { locked: false, state: 'readable', supportsBYOB: false }        -> request.body 
  //POST         -> request.method
  //RequestCookies {.....} -> request.cookies
  ///api/users   -> request.nextUrl.pathname

  Output of post call for (http://localhost:3000/api/users):

  {
      "message": "posting user data"
  }
  */

  //creating user:
  //fetch user detail from request
  const { name, email, password, about, profileURL } = await request.json()

  //create user object with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  //new user created

  //save the user to database
  try {
    
    const createdUser = await user.save()
    const response  = NextResponse.json(user, {
      status: 201,
    });
    return response
  } catch (error){
    return NextResponse.json({
      message: "failed to create user!!",
      status: false,
    })
  }
}

/* 
//delete request function
export function DELETE() {}

//put request function
export function PUT() {}
*/


