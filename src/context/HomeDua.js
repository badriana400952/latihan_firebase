import React, { useContext } from 'react'
import { Context } from './MyContext'


const HomeDua = () => {
    const { user } = useContext(Context)
    return (
        <div>

        <h1>ini home dua</h1>
        {
            user.map((d) => 
            <div key={d.id}>
            <h2>nama : {d.name}</h2>
            
            </div>
            )
        }
            
        </div>
       
    )
}

export default HomeDua