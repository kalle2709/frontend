// import React, { useEffect, useState } from "react";

// type ApiResponse = {
//   message: string;
//   status: string;
// };
// type ApiResponse = {
//      id: number,
//      title :string ,
//      image:any,
//      price: number,
//      catogery: string,
//      description: any
    
//     };

// const Products: React.FC = () => {
//   const [data, setData] = useState<ApiResponse | null>(null);

//   useEffect(() => {
//     // Fetch data from the PHP API
//     // fetch("http://localhost:8080/apitry.php")
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data: ApiResponse) => {
//         setData(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   console.log(data)

//   return (
//     <div>
//       <h1>Product Page</h1>
//       {data ? (
//         <div>
//           <p>{data.message}</p>
//           <p>Status: {data.status}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from 'react';
import './Products.css'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


type ApiResponse = {
 id: number,
 title :string ,
 image:any,
 price: number,
 catogery: string,
 description: any

};


const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<ApiResponse[] | null>(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then((data: ApiResponse[]) => {
                        setProducts(data);
                      })
    }, []);

    const addToCart = (productId: number) => {
        // fetch("http://localhost/api.php", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //     body: `action=addToCart&product_id=${productId}`
        // });
        navigate('/Cartpage');

    };
    console.log(products)

    return (
        <div>
            {/* <div className = 'headerDiv'>
             <Header/>
            </div> */}
            <div className = 'mainContent'>
                {
                    products ?
                    <div className='hstack productGrid'>
                    {products.map((product: ApiResponse) => (
                        
                        <div key={product.id}>
                            <div className = 'vstack itemStack'>
                                <img src = {product.image} className = 'imageStyle'/>
                                <p className = 'titleStyle'>{product.title}</p>
                                <p className = 'priceStyle'>{`Price: $${product.price}`}</p>
                                <p className = 'catogeryStyle'>{ `Catogery: ${product.catogery}`}</p>
                                <p className='descriptionStyle'>{`About: ${product.description}`}</p>
                                <button onClick={() =>{addToCart(product.id)}} className = 'buttonStyle'>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                    </div>
                :
                <h1 className = 'loadingStyle'>Loading...</h1>
                }

            </div>
            
            {/* <div>
                <Footer/>
            </div> */}
        </div>
    );
};

export default ProductList;
