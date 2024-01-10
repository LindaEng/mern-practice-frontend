import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const EditPage = () => {   
    const [editableProduct, setEditableProduct] = useState({
        name: "",
        quantity: 0,
        price: 0,
        image: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()
    const VITE_API_URL = import.meta.env.VITE_API_URL
    

    const getProductById = async (id) => {
        try {
            console.log("EDIT GET ", id);
            const response = await axios.get(`${VITE_API_URL}/api/products/${id}`)
            setEditableProduct(response.data.product)
        } catch (error) {
            console.log(error)
        }
    }

    const saveEditedProduct = async (e) => {
        e.preventDefault()
        try {
            console.log(editableProduct)
            const response = await axios.put(`${VITE_API_URL}/api/products/${id}`, editableProduct)
            toast.success(`Successfully edited!`)
            navigate("/")
        } catch (error) {
            toast.error(`Edit has failed`)
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setEditableProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }

    useEffect(() => {
        getProductById(id)
    }, [])

    return(
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-7">
            <img src={editableProduct.image} className="w-full"/>
            <form onSubmit={saveEditedProduct}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={editableProduct.name} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Name"></input>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" name="quantity" value={editableProduct.quantity} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Quantity"></input>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="price" value={editableProduct.price} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="price"></input>
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" name="image" value={editableProduct.image} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="image"></input>
                    </div>
                    <button className="block w-full mt-6 bg-cyan-700 text-white rounded-sm px-4 py-2 font-bold">UPDATE ME!</button>
                </div>
            </form>
        </div>
    )
}

export default EditPage