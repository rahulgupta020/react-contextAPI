import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Text = () => {

    const {val, setVal} = useContext(AppContext);

    const handleSubmit = () => {
        setVal("Rahul")
    }

    return(
        <>
            <h1>{val}</h1>
            <button onClick={handleSubmit}>Click</button>
        </>
    )
}
export default Text;