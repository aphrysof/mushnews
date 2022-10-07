import {Welcome, SignIn, SignUp, Home} from './pages'
import {Routes, Route}from 'react-router-dom'
import { AppProvider } from './context';

function App() {
  
  return (
  <AppProvider>
  <Routes>
    <Route path='/' element= {<Welcome/>} />
    <Route  path = 'signin' element = { <SignIn />}/>
     <Route  path = 'signup' element = {<SignUp />}/>
      <Route  path = 'home' element = {<Home />}/>
  </Routes>
  </AppProvider>  
  );
}

export default App;

