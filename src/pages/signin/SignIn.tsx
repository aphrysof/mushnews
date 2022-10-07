import { Button } from "../../components";
import {useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { AppContext } from "../../context";
import { collection, getDocs } from "firebase/firestore"; 

const SignIn = () => {
  const {formdata, handleChange} = useContext(AppContext)
  const navigate = useNavigate();


  //handleLogin functionality
  const handleLogin = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formdata.email, formdata.password )
    .then((res) => {
      if(res) {
       navigate("/home");
      }
    })
    .catch((err) => console.log(err));
  };
  return (
    <form className="mx-w-full" onSubmit={handleLogin}>
      <div className="w-2/5 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-6 mx-auto p-6 grid gap-2 md:my-28 ">
        <h1 className="text-3xl font-bold text-center text-[#5d3fd3]">
          Sign in
        </h1>
        <div>
          <label htmlFor="email" className="block mb-2">
            Emai Address:
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5"
            value = {formdata.email}
            onChange = {handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5"
            value = {formdata.password}
            onChange = {handleChange}
            required
          />
        </div>
        <div className="inline-flex justify-center">
          <Button onPress={() => {}}>Sign in</Button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
