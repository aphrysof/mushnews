import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axios
      .get(
        `https://revgeocode.search.hereapi.com/v1/revgeocode?at=-4.006384%2C39.5807202&lang=en-US&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>Home</div>;
};

export default Home;
