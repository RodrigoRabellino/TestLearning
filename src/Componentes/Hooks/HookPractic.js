import React, {useState, useEffect} from 'react'
import {useDebounce} from 'use-debounce'




const App = () =>{
    const [name, setName ] = useState('')
    const [products, setProducts] = useState([])
    
    const [search] = useDebounce(name, 1000) 


    const handleInput = (e) => {
        setName(e.target.value)
    } 

    useEffect(() => {
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
                .then(res => res.json())
                .then(data => setProducts(data.products))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

        
    

    return (
        <div>
            <input 
                type='text'
                placeholder='Nombre'
                onChange= {handleInput}
            />
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default App