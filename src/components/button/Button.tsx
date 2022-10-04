type ButtonProps = {
    children: React.ReactNode
    onPress: () => void;
}

const Button = ({children ,onPress}: ButtonProps) => {
  return (
    
    <button className = "w-28 bg-[#5D3FD3] border-2 border-[#5D3FD3] p-3 text-white rounded-3xl mx-4 text-base md:w-40" onClick={onPress} >
      {children}</button>
  )
}

export default Button