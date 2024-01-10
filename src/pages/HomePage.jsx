import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Product from "../components/Product"


const HomePage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const VITE_API_URL = import.meta.env.VITE_API_URL

    console.log(VITE_API_URL);

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axios(`${VITE_API_URL}/api/products/`)
            console.log("HEREE",response.data.products);
            setProducts(response.data.products)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (productId) => {     
        try {
            console.log("PRODUCT ID FROM HOME PAGE ", productId);
            await axios.delete(`${VITE_API_URL}/api/products/${productId}`)
            setProducts((currentProducts) => currentProducts.filter((product) => product._id !== productId))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                    Create Product
                </Link>
            </div>
            <div className="grid grid-cols-2 lag:grid-cols-4 gap-4 mt-5">
                { isLoading ? ("Loading Products") : (
                    <>                        
                        {products.length <= 0 ? "...Loading" : (products.map((product, idx) => {
                            return (
                                <div key={idx}>
                                    <Product key={idx} product={product} deleteProduct={deleteProduct}/>
                                </div>
                            )
                        }))}
                    </>
                )}
            </div>
        </div>
    )
}

export default HomePage