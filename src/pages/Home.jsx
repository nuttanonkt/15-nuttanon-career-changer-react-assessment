import React from 'react'
import User from './User';
import Admin from './Admin';


function Home() {
  return (
    <div className="bg-amber-400 text-center m-4">
        <h1 className=" text-4xl font-bold ">Generation Thailand <br /> React - Assessment</h1>  
        <div className="mt-4"> 
          <User />
          <Admin />
        </div>
    </div >

  )
}

export default Home;