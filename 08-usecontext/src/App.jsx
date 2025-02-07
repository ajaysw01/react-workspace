import { createContext, useState } from "react";

import "./App.css";
import ChildA from "./components/ChildA";

//step 1 : create context
const UserContext = createContext();

//step 4 : consumer me jake consume karn h

function App() {
  const [user, setUser] = useState({ name: "Ajay" });
  return (
    <>
      {/* step 2 : wrap all the child inside a provider */}
      {/* step 3 : pass the value */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
