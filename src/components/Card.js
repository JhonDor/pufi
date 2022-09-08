import React from 'react'

const product=[
    {
      id:"1",
      name:"Pufi RAIN",
      imageUrl:"https://images.unsplash.com/photo-1517398446216-8ccdaf6aa66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHVtYnJlbGxhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productUrl:"https://images.unsplash.com/photo-1580051235428-f88ae8a2d53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW1icmVsbGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"2",
      name:"Pufi PUFF",
      imageUrl:"https://images.unsplash.com/photo-1591552727657-3908ac130466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGluZmxhdGFibGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      productUrl:"https://images.unsplash.com/photo-1592653700973-29a2a09628ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGluZmxhdGFibGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"3",
      name:"Pufi CART",
      imageUrl:"https://images.unsplash.com/photo-1630381260512-e3fe55c11973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwYmFnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productUrl:"https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3BpbmclMjBiYWd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"4",
      name:"Pufi NAP",
      imageUrl:"https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlsbG93fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productUrl:"https://images.unsplash.com/photo-1531877025030-f7696a50770f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGlsbG93fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description:"Descripción del producto. Este es un texto simulado",
  
    }
  ]

const Card = (props) => {
  
  return (
   
    <div>
      {
        product.map((product, index)=>(
          <article key={index} className= "products">
          <div  className = "articleImage">
            <img  src={product?.imageUrl} />
          </div>
          
          <div className="productInfo">
          
              <img style={{maxHeight:"100px",margin:"auto"}} src={product?.productUrl} />
              <h3>{product?.name}</h3>
              <p>{product?.description}</p>
              
            </div>
           </article>
            
        ))
      }
          
      </div>
      
    
  )
}

export default Card