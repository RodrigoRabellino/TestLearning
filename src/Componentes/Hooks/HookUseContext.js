import React, { useState, useContext } from 'react'

const MyContext = React.createContext()


const Hijo = () => {
    return(
        <div>
            <p>hijo</p>
            <Nieto/>
        </div>
    )
} 

/* const Nieto = () => (
    <MyContext.Consumer>
        {(context) => (
            
            <div>
               <p>nieto {context.num}</p>
               <button onClick={context.addNum}>
                   Nieto Dispatcher
               </button>
            </div>
        )}

    </MyContext.Consumer>

) */

const Nieto = () => {
    
    const {num, addNum} = useContext(MyContext)
    
    return(
        <div>
               <p>nieto {num}</p>
               <button onClick={addNum}>
                   Nieto Dispatcher
               </button>
            </div>
    )


}
    



const App =() => {
    const [num, setNum] = useState(0)

    const addNum = () => setNum(num+1)

    return(
        <MyContext.Provider value={{
            num, 
            addNum
        }}>
            <div>
                <button onClick= {addNum}>
                    Click ({num})
                </button>
                <Hijo/>
            </div>

        </MyContext.Provider>

        
    )

}

export default App