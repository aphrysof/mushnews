import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userDetailProps } from "../types/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";

type AppProviderProps = {
  handleSubmit: (value: any) => void;
  handleChange: (e: any) => void;
  handleLogin: (e: any) => void;
  page: number;
  formdata: userDetailProps;
  user: userDetailProps;
  isAuthenticated: boolean
  location: []
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
  user: {
    name: "",
    username: "",
    email: "",
    password: "",
    isChecked: false,
    latitude: 0,
    longitude: 0,
  },
  isAuthenticated: false,
  location: []
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
  const [user, setUser] = useState<userDetailProps>({} as userDetailProps)

   const [location, setLocation] = useState<any>([])
 

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const userDetails = localStorage.getItem("userData");
    if(userDetails){
      const details = JSON.parse(userDetails)
       setUser(details);
    }
  }, []);

  const navigate = useNavigate();

  //submit function: password auth from firebase
  function submitForm() {
   if(formdata.password.length > 5){
     createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then(async (userCredential) => {
        const user = userCredential.user.uid;
        await setDoc(doc(db, "users", user), formdata);
        localStorage.setItem("user", JSON.stringify(formdata))
       navigate('signin');
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
      .then(() => {
        onAuthStateChanged(auth, async(user) => {
          if(user) {
            const snapshot = await getDoc(doc(db, `users/${user.uid}`))
            console.log(snapshot.data(), user.uid);
            localStorage.setItem('userData', JSON.stringify(snapshot.data()));
            setIsAuthenticated(true);
            navigate('home');
          }else {
            return;
          }
        })
      }).then(() => {
        navigator.geolocation.getCurrentPosition((position: any) => {
         const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
          axios.get(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=${process.env.REACT_APP_API_KEY}`)
          .then((res) => {
            setLocation(res.data.items);
          });
      }, error => {console.log(error)});
      })
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
        isAuthenticated,
        location
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
