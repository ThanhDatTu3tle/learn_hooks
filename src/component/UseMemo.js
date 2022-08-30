import { useState, useMemo, useRef } from "react";

function UseMemo() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()
  const priceRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
    setName('')
    setPrice('')

    nameRef.current.focus() // useRef in order to auto focus - use for <input />
    priceRef.current.focus() // useRef in order to auto focus - use for <input />
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      // console.log(`Tính cc`)
  
      return result + prod.price
    }, 0)

    return result
  }, [products])

  return (
    <div>
      <input 
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <input 
        ref={priceRef}
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <h3>Total: {total}</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseMemo;
