import React, { useEffect, useState } from "react";


const Product = () => {
  let [data,setData]=useState([])
  useEffect(() => {
    
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => setData(json.products))
            
  }, []);

  console.log(data);

  return (
    <div className="row"> 
     {
      data.map((ele)=>{
      return(<>
        <div className="col-3">
          <h1>{ele.title}</h1>
          <img src={ele.thumbnail} alt="" />
        </div>
      </>)
      })
     }
    </div>
  );
};

export default Product;