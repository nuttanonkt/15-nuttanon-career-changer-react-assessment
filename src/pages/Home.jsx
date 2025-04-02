import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
const naviate = useNavigate();

const NavaigateUser = () => {
  naviate("/user")
};

const NavigateAdmin = () => {
  naviate("/admin");
}

  return (
    <div className="bg-amber-400 text-center m-4">  
      <h1 className=" text-4xl font-bold ">Generation Thailand <br /> React - Assessment</h1> 
        <div className="mt-4"> 
          <button onClick ={NavaigateUser} className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 mx-2 my-2">
            User Home Sector
          </button>
          <button onClick={NavigateAdmin} className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 mx-2 my-2" >
            Admin Home Sector
          </button>
        </div>
    </div >

  );
};

export default Home;