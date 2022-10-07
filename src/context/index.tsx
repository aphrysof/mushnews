import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userDetailProps } from "../types/types";

type AppProviderProps = {
  handleSubmit: (value: any) => void;
  handleChange: (e: any) => void;
  page: number;
  formdata: userDetailProps;
   user: userDetailProps | null;
  
};

const AppContext = createContext<AppProviderProps>({
  handleSubmit: () => {},
  handleChange: () => {},
  page: 0,
  formdata: {
    name: "",
    username: "",
    email: "",
    password: "",
    isChecked: false,
    latitude: 0,
    longitude: 0,
  },
 user: null,
});

const AppProvider = ({ children }: any) => {
  //Initial State for the formdata
  const data: userDetailProps = {
    name: "",
    username: "",
    email: "",
    password: "",
    isChecked: false,
    latitude: 0,
    longitude: 0,
  };
  //setting state for the formdata
  const [formdata, setFormData] = useState(data);
  //creating state to manage the display of every component
  const [page, setPage] = useState<number>(0);
  //user state
  const [user, setUser] = useState<userDetailProps | null>(null)

  useEffect(() => {
    const userDetail = localStorage.getItem("userDetails")
    if(userDetail){
      const details = JSON.parse(userDetail)
       setUser(details);
       console.log(details)
    }
  }, [])

  const navigate = useNavigate();

  //onSubmit functionality if the checkbox is checked get the cordinates of the user and add it to the formdata object.
  const submitForm = () => {
    if (formdata.isChecked === true) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setFormData({
          ...formdata,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      localStorage.setItem("userDetails", JSON.stringify(formdata));
    }
  };

  // handleCHange function
  const handleChange = (e: any) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = (value: any) => {
    switch (value) {
      case "signup":
        return navigate("signup");
      case "signin":
        return navigate("signin");
      case "submit":
        return submitForm();
      case "increment":
        return setPage(page + 1);
      case "decrement":
        return setPage(page - 1);
      default:
        return console.log("not found");
    }
  };
  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        page,
        handleChange,
        formdata,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
