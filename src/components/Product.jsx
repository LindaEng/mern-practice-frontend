import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">{product.name}
            <img src={product.image} className="w-full h-28 object-cover"/>
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold"></h2>
                <div className="text-sm">{product.quantity}</div>
                <div className="text-sm">Price: ${product.price}</div>
                <div className="mt-2 flex gap-4">
                    <Link to={'/edit'} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"> Edit </Link>
                    <Link to={'/delete'} className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"> Delete </Link>
                </div>
            </div>
        </div>
    )
}

export default Product