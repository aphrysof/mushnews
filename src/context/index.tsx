import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userDetailProps } from "../types/types";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type AppProviderProps = {
  handleSubmit: (value: any) => void;
  handleChange: (e: any) => void;
  handleLogin: (e: any) => void;
  page: number;
  formdata: userDetailProps;
  user: userDetailProps | null;
};

const AppContext = createContext<AppProviderProps>({
  handleSubmit: () => {},
  handleChange: () => {},
  handleLogin: () => {},
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
  const [user, setUser] = useState<userDetailProps | null>(null);

  useEffect(() => {
    // const userDetail = localStorage.getItem("userDetails")
    // if(userDetail){
    //   const details = JSON.parse(userDetail)
    //    setUser(details);
    //    console.log(details)
    // }
  }, []);

  const navigate = useNavigate();

  //submit function: password auth from firebase
  function submitForm() {
    //checks if the checkbox is clicked , if yes it updates the formdata intialstate else setformdata to the initialState;
   
    //then create user and save the user in the users collection.
   if(formdata.password.length > 5){
     createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then(async (userCredential) => {
        const user = userCredential.user.uid;
        await setDoc(doc(db, "users", user), formdata);
       navigate('/signin');
      })
      .catch((err) => console.log(err));
   }else {
    console.log('password not strong');
   }
  }

  // handleCHange function
  const handleChange = (e: any) => {
    const { name, type, value, checked, } = e.target;
    
    if(type === "checkbox" && checked){
        navigator.geolocation.getCurrentPosition((position: any) => {
         const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
        setFormData({
          ...formdata,
          latitude: latitude,
          longitude: longitude,
          isChecked: true
        });
         console.log(position.coords)
      }, error => {console.log(error)});
    }else {
        setFormData({
      ...formdata,
     [name]: value,
     isChecked: false
    });
    }
  };

  //handleLogin function
  const handleLogin = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then(async () => {})
      .catch((err) => console.log(err));
  };

  //handlesubmit function
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
        handleLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
