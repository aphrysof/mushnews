import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";


const Home = () => {

  const {user, isAuthenticated, location} = useContext(AppContext)
  
  return <div>
    <p>{user.username}</p>
    <div>
      {location.map((element: any) => (
        <p>{element.address.label}</p>
      ))}
    </div>
  </div>;
};

export default Home;
