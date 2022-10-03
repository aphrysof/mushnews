
type FirstProps = {
  formData: {
    name: string;
    username: string;
    email: string;
    isChecked: boolean;
  }
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const First = ({formData, handleChange}: FirstProps) => {
  return (
    <>
      <h1 className = "text-4xl font-semibold text-[#170F49]">Hey there, Welcome to <span className='italic'>MushNews!</span></h1>
      <h6 className = 'text-2xl font-medium text-[#6F6C90] mb-6'>To start with, what's your beautiful name.</h6>
      <input type = "text" placeholder = "John Doe" name="name" className='w-3/5 p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5' value={formData.name}  onChange = {handleChange} required/>
    </>
  )
}

export default First