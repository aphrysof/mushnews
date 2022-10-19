import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { Outlet } from "react-router-dom";


const Home = () => {

  const {user, isAuthenticated } = useContext(AppContext)

  const [location, setLocation] = useState<any>([])

  useEffect(() => {
    const userLocation = localStorage.getItem('location');
    if(userLocation) {
      const local = JSON.parse(userLocation);
      setLocation(local)
    }
  }, [])
  
  return <div>
    <p>{user.username}</p>
    <div>
      {location.map((element: any) => (
        <p>{element.address.label}</p>
      ))}
    </div>
  </div>;
  <Outlet />
};

export default Home;
