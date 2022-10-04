type FirstProps = {};

const First = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-[#5d3fd3] text-center">
        Sign up
      </h1>
      <div className="">
        <label htmlFor="name" className="block mb-2">
          Your Full Name:
        </label>
        <input
          type="text"
          placeholder="John Doe"
          name="name"
          className="w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5"
          required
        />
      </div>
      <div className="">
        <label htmlFor="username" className="block mb-2">
          Username:
        </label>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5"
          required
        />
      </div>
    </>
  );
};

export default First;
