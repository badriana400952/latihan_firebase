import React from 'react'
// import HomePage from './context/HomePage'
// import HomeDua from './context/HomeDua'
import { Provider } from './context/MyContext'
import Producss from './component/Producss'

const Context = () => {
    return (

        <div>
            <Provider>
                <Producss />
            </Provider>
        </div>
    )
}

export default Context