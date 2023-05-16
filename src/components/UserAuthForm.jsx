import { useContext, useEffect, useState } from "react"
import { UserAuthContext } from "./UserContextComponent";


export default function UserAuthForm(){

    const [localJwt, setLocalJwt] = useState("") 

    const userAuthContextData = useContext(UserAuthContext);
    
    useEffect(() => {
        setLocalJwt(userAuthContextData.readJwt)
    }, [])

    const submitFormData = (event) => {
        // set context value to local value. 
        userAuthContextData.updateJwt(localJwt);

    }

    return(
        <div>
            <form>
                <label>JWT as a string</label>
                <input type="text" value={localJwt} onChange={(event) => setLocalJwt(event.target.value)}/>
                
            </form>
            <button onClick={submitFormData}> Submit new JWT </button>
        </div>
    )
}