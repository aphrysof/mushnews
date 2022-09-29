type ButtonProps = {
  children: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  return (
    <button className = 'md: bg-[#5D3FD3] border-2 border-[#5D3FD3] w-1/4 p-3 text-white text-lg rounded-3xl'>{props.children}</button>
  )
}

export default Button