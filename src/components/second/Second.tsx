import { AppContext } from "../../context";
import { useContext } from "react";

const Second = () => {
  const { formdata, handleChange } = useContext(AppContext);
  return (
    <>
      <h1 className="text-4xl font-semibold text-[#170F49] text-center">
        Let's get to know you.
      </h1>
      <div className="w-full flex flex-col">
        <div className="mb-2">
          <label htmlFor="email" className="block mb-3">
            Your email address:
          </label>
          <input
            type="email"
            name="email"
            className="
          w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90]"
            value={formdata.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block mb-3">
            Your Password:
          </label>
          <input
            type="password"
            name="password"
            className="
          w-full p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90]"
            value={formdata.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          name="isChecked"
          id="check"
          checked={formdata.isChecked}
          onChange={handleChange}
        />
        <label htmlFor="check" className="ml-2 mt-3">
          Allow MushNews to access your location
        </label>
      </div>
    </>
  );
};

export default Second;
