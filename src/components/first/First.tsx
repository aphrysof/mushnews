import { Button } from '../index'

const First = () => {
  return (
    <div className = "md:max-w-full w-3/5 my-36 mx-auto flex flex-col items-center gap-6">
      <h1 className = "text-4xl font-semibold text-[#170F49]">Hey there, Welcome to <span className='italic'>MushNews!</span></h1>
      <h6 className = 'text-2xl font-medium text-[#6F6C90] mb-6'>To start with, what's your beautiful name.</h6>
      <input type = "text" placeholder = "John Doe" className='w-3/5 p-4 border-2 border-[#5D3FD3] rounded-md outline-[#5D3FD3] 
      text-lg caret-[#5d3fd3] text-[#6F6C90] mb-5' required/>
      <Button>Next Step</Button>
    </div>
  )
}

export default First