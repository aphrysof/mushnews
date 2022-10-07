import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userDetailProps } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
  //checks if the checkbox is clicked , if yes it update the formdata intialstate else setformdata to the initialState;
    if (formdata.isChecked === true) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setFormData({
          ...formdata,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
     setFormData(formdata);
    }
    //then create user and save the user in the users collection.
    createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then(async () => {
        const res = await addDoc(collection(db, "users"), {
          name: formdata.name,
          email: formdata.email,
          password: formdata.password,
          latitude: formdata.latitude,
          longitude: formdata.longitude,
          isChecked: formdata.isChecked,
        });
        const docId = res.id;
        console.log(docId);
        navigate('/signin');
      })
      .catch((err) => console.log(err));
  }

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
