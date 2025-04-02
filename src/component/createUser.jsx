import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateUser() {
  const [name, setName] = useState("");
  const [lastname, setLatname] = useState("");
  const [position, setPosition] = useState("");
  const [result, setResult] = useState(null);
  const [save, setSave] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const newUser = async () => {
      if (!save || !name || !lastname || !position);
      try {
        const res = await axios.post(
          "https://jsd5-mock-backend.onrender.com/members",
          { name, lastname, position }
        );
        setResult(res.data);
      } catch (err) {
        console.error(err);
        setError("failed new user");
      } finally {
        setSave(false);
      }
    };
    newUser();
  }, [save, name, lastname, position]);

  const handleSave = (e) => {
    e.prevenDefault();
    setResult(true);
  };

  return (
    <div className="p-3">
      <h2 className="font-bold"> Create User Here </h2>
      <form onSubmit={handleSave} className="flex justify-between items-center" >
        <input 
            className="bg-amber-200 rounded-md px-3 py-1"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" 
        />
        <input 
            className="bg-amber-200 rounded-md px-3 py-1"
            type="text"
            value={lastname}
            onChange={(e) => setLatname(e.target.value)}
            placeholder="LastName"
         />
        <input 
            className="bg-amber-200 rounded-md px-3 py-1"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
         />
         <button className="bg-red-600 rounded-xl p-1" type="Submit">
            Save
         </button>
      </form>

    {result && (
        <p>created </p>
    )}
    {error && (
        <p>Error</p>
    )}
    </div>
  );
}

export default CreateUser;
