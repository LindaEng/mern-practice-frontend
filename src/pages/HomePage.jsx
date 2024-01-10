import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Product from "../components/Product"

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axios(`http://localhost:3000/api/products/`)
            setProducts(response.data.products)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (productId) => {     
        try {
            console.log("PRODUCT ID FROM HOME PAGE ", productId);
            await axios.delete(`http://localhost:3000/api/products/${productId}`)
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
                        {products.length < 0 ? "...Loading" : (products.map((product, idx) => {
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