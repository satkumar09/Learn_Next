// api/tasks

import { NextResponse } from "next/server"
import { Task } from "@/models/task"
import { getResponseMessage } from "@/helper/errorMessage";

//get all the tasks
export async function GET(request){

  try{

   const tasks = await Task.find()
   return NextResponse.json(tasks);

  }catch(error){
    console.log(error)
    return getResponseMessage("Error in getting data !!",404,false)
  }

}
//for post call with body:
/*
{
    "userId": "659305d9106a78c12b5917f1",
    "title": "This is testing title", 
    "content": "this is testing content"
    
}

Output: (task for the given userId)
[
    {
        "_id": "659ab2d3c1dfb91cf66b41bd",
        "title": "This is testing title",
        "content": "this is testing content",
        "addedDate": "2024-01-07T14:08:40.855Z",
        "status": "pending",
        "userId": "659305d9106a78c12b5917f1",
        "__v": 0
    },
    {
        "_id": "659ab342c1dfb91cf66b41bf",
        "title": "have to learn nextjs is 1 week",
        "content": "this is testing content",
        "addedDate": "2024-01-07T14:08:40.855Z",
        "status": "pending",
        "userId": "659305d9106a78c12b5917f1",
        "__v": 0
    }
]
*/

//create all the tasks
export async function POST(request){
  const {title, content, userId} = await request.json()
  try{
    const task = new Task({
      title,
      content, 
      userId,
    })
    const createdTask = await task.save()
    return NextResponse.json(createdTask, {
      status: 201,
    })
  } catch(error){
    console.log(error)
    return getResponseMessage("Failed to create Task!!", 500, false)
  }
}

//for post call with body:
/*
{
    "title": "This is testing title", 
    "content": "this is testing content"
}

Output: 
{
    "message": "Failed to create Task!!",
    "success": false
}

As we didn't send userId
*/