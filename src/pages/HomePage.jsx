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
            console.log('FROM BACKEND ',response.data.products);
            setProducts(response.data.products)
            setIsLoading(false)
            console.log('PRODUDUDUDUCTS', products)
        } catch (error) {
            console.log(error)
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
                                <div>
                                    <Product key={idx} product={product}/>
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