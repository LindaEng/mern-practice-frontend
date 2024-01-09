import { useState } from "react"

const CreatePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        price: 0,
        imageURL: ""
    })

    const onChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Create a Product
            </h2>
            <form>
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
                        <input type="text" name="imageURL" value={formData.imageURL} onChange={onChange} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL"></input>
                    </div>
                    <div>
                        <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold">Create Product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePage