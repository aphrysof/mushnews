import { Button } from "../../components"
import {useContext} from 'react'
import { AppContext } from "../../context"

const SignIn = () => {
  const {handleSubmit} = useContext(AppContext)
  return (
    <div className = "mx-w-full">
      <div className = "w-2/5 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-6 mx-auto p-6 grid gap-2 md:my-28 ">
         <h1 className = "text-3xl font-bold text-center text-[#5d3fd3]">Sign in</h1>
      <div>
        <label htmlFor="username" className="block mb-2">Username:</label>
        <input type="text" name="username" 
        className="w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5" required />
      </div>
       <div>
        <label htmlFor="password" className="block mb-2">Password:</label>
        <input type="password" name="password" 
        className="w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5" required />
      </div>
      <div className = "inline-flex justify-center">
         <Button onPress = {() => handleSubmit('login')}>Sign in</Button>
      </div>
      </div>
    </div>
  )
}

export default SignIn