import { FirstStep, SecondStep, Button } from "../../components";
import {  useContext } from "react";
import { AppContext } from "../../context";


const SignUp = () => {
  const { page, handleSubmit } = useContext(AppContext);

  //creating a function that will render different components based on the page value;
  const conditionalForms = () => {
    switch (page) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      default:
        return <FirstStep />;
    }
  };

  return (
    <div className="max-w-full">
      <div className="w-3/5 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-6 mx-auto p-6 flex flex-col gap-4 md:my-16 ">
        {conditionalForms()}
        <div className="flex flex-row-reverse justify-between my-3">
          {page === 0  ? (
            <Button onPress={() => handleSubmit("increment")}>Next Step</Button>
          ) : (
            <Button onPress={() => handleSubmit("submit")}>Submit</Button>
          )}
          {page > 0 ? <Button onPress = {() => handleSubmit('decrement')}>Previous</Button> : null}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
