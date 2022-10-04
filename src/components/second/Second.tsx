

type SecondProps = {
   
}

const Second = () => {
  return (
    <>
      <h1 className= "text-4xl font-semibold text-[#170F49] text-center">Let's get to know you.</h1>
      <div className="w-full flex flex-col">
        <div className="mb-2">
          <label htmlFor="username" className="block mb-3">
            Your username:
          </label>
          <input type="text" name="username" className="
          w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90]"  required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-3">
            Your email address:
          </label>
          <input type="email" name= "email" className="
          w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90]" required />
        </div>
      </div>
      <div className = 'mb-2'>
        <input type = 'checkbox' name="isChecked" id="check" />
          <label htmlFor="check" className="ml-2 mt-3">Allow MushNews to access your location</label>
      </div>
    </>
  );
};

export default Second;
