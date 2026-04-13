import { useState } from "react";
import { Button } from "../components/ui/Button";
import NewsletterBox from "../components/common/NewsletterBox";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  return (

    <main>
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          required
          name=""
          id=""
          className="w-full px-3 py-2 border border-grey-800"
          placeholder="Name"
        />
      )}

      <input
        type="email"
        required
        name=""
        id=""
        className="w-full px-3 py-2 border border-grey-800"
        placeholder="Email"
      />
      <input
        type="password"
        required
        name=""
        id=""
        className="w-full px-3 py-2 border border-grey-800"
        placeholder="Password"
      />

      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer">Forgot your password</p>
        
        {currentState === "Login"? <p onClick={()=>setCurrentState("Sign Up")} className="cursor-pointer">Create acoount</p>: <p onClick={()=>setCurrentState("Login")} className="cursor-pointer">Login Here</p>}
       
      </div>

      <Button variant="solid" type="submit">
        {currentState === "Login"? "Sign In" : "Sign Up"}
      </Button>
    </form>
    <div className="mt-9 sm:mt-14">
 <NewsletterBox/>
    </div>
   
    </main>
  );
};

export default Login;
