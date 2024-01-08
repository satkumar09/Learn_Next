//http://localhost:3000/about will call this page.js

//to delay the loading time with 3 seconds
async function takeTime(){
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
}

//to throw error: 
function throwError(){
  throw new Error("this is manual error");
}

export default async function About(){
  await takeTime();
  throwError();
  return (
    <div>
      <h1>This is about</h1>
    </div>
  )
}

//we use await before calling the takeTime() function is to ensure the control doesn't shift to the next line