import {FirstStep, SecondStep, ThirdStep} from './components/index'
import {useState} from 'react'

type data = {
 name: string;
    username: string;
    email: string;
    isChecked: boolean;
}

function App() {

  const [page, setPage] = useState<number>(0)


  const[formData, setFormData] = useState<data>({
    name: '',
    username: '',
    email: '',
    isChecked: false,
  })

  //onclick function that navigates a user to the next component based on the argument passed to a button.
  const handleSteps = (value: string) => {
  if(value === "increment") {
    setPage(page + 1);
  }
  else if(value === "decrement") {
    setPage(page - 1)
  }
}

//onChange function
const handleChange = (event: any) => {
  const {name, value, type, checked} = event.target;
  setFormData((formData) => {
    return {...formData, [name]: type === 'checkbox' ? checked : value}
  });

}

const handleSubmit = (event: any) => {
  event.preventDefault();
  console.log(formData)

}
  //creating a function that will render different components based on the page value;
  const conditionalForm = () => {
    switch (page) {
      case 0:
          return <FirstStep formData = {formData}  handleChange = {handleChange}/>;
      case 1:
        return <SecondStep formData = {formData} handleChange = {handleChange}/>;
      case 2: 
      return <ThirdStep />;
      default:
        return <FirstStep formData = {formData} handleChange = {handleChange}/>;
       
    }
  }

  return (
   <div className = "md:max-w-full w-3/5 my-24 mx-auto flex flex-col items-center gap-5">
    {conditionalForm()}
       <div className="md:flex flex-row-reverse justify-between">
          {page === 0 || page === 1 ? <button className = 'md: bg-[#5D3FD3] border-2 border-[#5D3FD3] w-40 p-3 text-white text-lg rounded-3xl' onClick = {() => handleSteps('increment')}>Next Step</button>
 : <button className = 'md: bg-[#5D3FD3] border-2 border-[#5D3FD3] w-40 p-3 text-white text-lg rounded-3xl' onClick = {handleSubmit} >Submit</button>} 

 {page > 0 ?

         <button className = " md: bg-[#5D3FD3] border-2 border-[#5D3FD3] w-40 p-3 text-white text-lg rounded-3xl mx-3"onClick={() => handleSteps('decrement')}>Previous</button>
       : null}
     </div>

   </div>
  );
}

export default App;

