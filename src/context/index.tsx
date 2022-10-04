import { createContext , useState} from "react";
import {useNavigate} from 'react-router-dom'

type AppProviderProps = {
handleSubmit: (value: any) => void;
page: number;

}

const AppContext = createContext<AppProviderProps>({
    handleSubmit: () => {},
    page: 0
})


const AppProvider = ({children}: any) => {

  //creating state to manage the display of every component
  const [page, setPage] = useState<number>(0)

const navigate = useNavigate();
    
const handleSubmit = (value: any) => {
    switch (value) {
        case 'signup':
            return navigate('signup');
        case 'signin':
            return navigate('signin');
        case 'submit':
            return console.log('submit');
        case 'login':
            return navigate('login');
        case 'increment':
            return setPage(page + 1);
         case 'decrement':
            return setPage(page - 1);

        default:
            return console.log('not found')
           
    }

}
    return (
        <AppContext.Provider value={{
            handleSubmit,
            page,
        }}>
        {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}