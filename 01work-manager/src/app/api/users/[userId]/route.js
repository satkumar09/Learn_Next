//for dynamic routing -> [folder-name]

import { User } from "@/models/user";
import { NextResponse } from "next/server";

//get single user:
export async function GET(request, {params}){
  const { userId } = params
  const user = await User.findById(userId)
  //const user = await User.findById(userId).select("-password")       -> to hide password from showing during get request
  return NextResponse.json(user)
}

//params: to get access to the specific user id at the time of call 
export async function DELETE(request, { params }) {

  /*
  const userId = params.userId 
  console.log(`userid: ${userId}`)

  return NextResponse.json({
    message: "testing delete",
  })
  //NextRequest: to fetch data
  //NextResponse: used to give response


  //output in console:
  //userid: anyRandomNumber (as given in the url during delete call)

  
  Output of delete call for (http://localhost:3000/api/users/(anyRandomNumber)):
  {
    "message": "testing delete"
  }
  */


  //delete user
  const { userId } = params
  try{
    await User.deleteOne({
      _id: userId,
    })
    return NextResponse.json({
      message: "user deleted!!",
      success: true,
    })
  } catch(error){
    return NextResponse.json({
      message: "Error in deleting user!!",
      success: false,
    })
  }
  
}


//update user:
export async function PUT(request, {params}){
  const {userId} = params
  const {name,password,about,profileURL} = await request.json()

  try{
    const user = await User.findById(userId)
    
    user.name = name
    user.about = about
    user.password = password 
    user.profileURL = profileURL

    const updatedUser = await user.save()
    return NextResponse.json(updatedUser)

  } catch (error) {
    return NextResponse.json({
      message: "failed to update user!!",
      success: false,
    })
  }

}

