import React, { useState } from "react";
import Text from "./Text";
import { AppContext } from "./AppContext";

function App(){

  const [val, setVal] = useState("");

  return(
    <>
      <AppContext.Provider value={{val, setVal}}>
        <Text />
      </AppContext.Provider>
    </>
  )
}
export default App;