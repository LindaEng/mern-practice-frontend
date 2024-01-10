import { useState } from "react"
import { useNavigate }  from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"


const CreatePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        price: 0,
        image: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const onChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const saveProduct = async (e) => {
        e.preventDefault()
        const {name, quantity, price, image} = formData
        if(!name || !quantity || !price || !image) {
            alert("please fill out the form completely")
            return
        } try {
            setIsLoading(true)
            const response = await axios.post(`http://localhost:3000/api/products`, formData)
            toast.success(`Saved ${response.data.product.name}`)
            setIsLoading(false)
            navigate("/")
        } catch (error) {
            toast.error(error.message)
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Create a Product
            </h2>
            <form onSubmit={saveProduct}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Name"></input>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Quantity"></input>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="price" value={formData.price} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price"></input>
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" name="image" value={formData.image} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL"></input>
                    </div>
                    <div>
                        { isLoading ? "" : <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold">Create Product</button>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePage