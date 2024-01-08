import { NextResponse } from "next/server";

export function GET(request, { params }){
  const { userId, postId } = params
  console.log(`user id: ${userId} post id: ${postId}`)
  return NextResponse.json(params)
}

//output in console:
//user id: anyRandomNumber post id: anyRandomNumber

/*
Output of delete call for (http://localhost:3000/api/todos/(anyRandomNumber)/posts/(anyRandomNumber)):

{
    "userId": "34",
    "postId": "245"
}
*/