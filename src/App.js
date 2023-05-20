import { useState } from "react";
import Dashboard from "./Dashboard";
import Signup from "./Signup";


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <Signup setLoggedInUser = {setLoggedInUser}/>
    </>
  );
}

export default App;
