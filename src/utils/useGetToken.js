/*
Custom hook to get the access token from auth0 without having to call all this code in each file. 
Useage example:
  import useGetToken from "../utils/useGetToken";
  ...
  const [token] = useGetToken();
  ...
  then use variable token with fetchWithAuth, for instance, or conditional rendering
*/

import { useState, useEffect } from "react"
import { useAuth0 } from "../auth/react-auth0-wrapper";

function useGetToken() {
    const [token, setToken] = useState(null)

    const { getTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchToken = async () => {
            const result = await getTokenSilently()
            setToken(result)
        }
        fetchToken()
    })

    return ([token])
}

export default useGetToken