import React, { useContext } from 'react'
import { Context } from './MyContext'


const HomePage = () => {
    const { data } = useContext(Context)
    return (
        <div>
        {
            data.map((d) => 
            <div key={d.id}>
            <h2>judul : {d.title}</h2>
            
            </div>
            )
        }
            
        </div>
       
    )
}

export default HomePage