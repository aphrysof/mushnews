import { Button } from "../index";

type SecondProps = {
 
}

const Second = (props: SecondProps) => {
  return (
    <>
      <h1 className= "text-4xl font-semibold text-[#170F49] text-center">Let's get to know you.</h1>
      <div className="w-full flex flex-col">
        <div className="">
          <label htmlFor="username" className="block mb-3">
            Your username:
          </label>
          <input type="text" name="username" className="
          w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5" required />
        </div>
        <div className="">
          <label htmlFor="email" className="block mb-3">
            Your email address:
          </label>
          <input type="email" name= "email" className="
          w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5" required />
        </div>
      </div>
      <div className = ''>
        <input type = 'checkbox' name="checkbox" id="check" />
          <label htmlFor="check" className="ml-2">Allow MushNews to access your location</label>
      </div>
    </>
  );
};

export default Second;
