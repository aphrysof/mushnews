import { Button } from "../../components"
import {useContext} from 'react';
import { AppContext } from "../../context";

const Welcome = () => {
  const {handleSubmit} = useContext(AppContext);
  return (
    <div className="max-w-full">
        <div className = "w-4/5 my-20 mx-auto p-5 md:my-32 ">
            <h1 className = "text-2xl font-bold text-center py-4 text-[#5d3fd3] md:text-4xl">Hey there, </h1>
            <h1 className = "text-2xl font-bold text-center pb-4 text-[#5d3fd3] md:text-4xl">Welcome to MushNews!</h1>
            <p className = "text-xl font-normal text-center py-2 text-[#6F6C90]">Your number one place to get all the latest news from all over the country.<span>To get started please,</span></p>
            <div className = "flex items-center justify-center py-8">
              <Button onPress = {() => handleSubmit('signin')}>Sign In</Button>
              <p className="text-xl font-normal px-2 text-[#6F6C90]">or</p>
              <Button onPress = {() => handleSubmit ('signup')}>Sign Up</Button>
            </div>
        </div>
    </div>
  )
}

export default Welcome