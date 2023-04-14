import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Context = createContext(null)




const Provider = ({ children }) => {


    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    
    const getData = async () => {
        const respons = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(respons.data)
        setData(respons.data)
    }
    const getDatadua = async () => {
        const respons = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        console.log(respons.data)
        setUser(respons.data)
    }

    useEffect(() => {
        getData()
        getDatadua()
    }, [])
    


    return (
        <Context.Provider value={{ data, user }}>
            {children}
        </Context.Provider>
    )
}
export { Context, Provider }