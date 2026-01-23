
export default function CartCard({ product }) {
    return (
        <div className="flex items-center justify-center bg-gray-100 p-8 bg-white shadow-lg rounded-lg border border-default">
            <img src={product.image} alt={product.name} className="justify-right w-40 h-40" />
            <p className="font-semibold justify-right">{product.name}</p>
            <p className="text-gray-600 justify-ce">${product.price}</p>
            <button className="text-red-500 hover:text-red-700 ml-4">Remove</button>
        </div>
    )
}
