import { useState, useEffect } from "react"
import axios from "axios"

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
            <div className="mt-5">
                { isLoading ? ("Loading Products") : (
                    <>                        
                        {products.length < 0 ? "...Loading" : (products.map((product) => {
                            return (
                                <div>
                                    {product.name}
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