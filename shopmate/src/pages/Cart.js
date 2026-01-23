import CartCard from "../components/CartCard"
import useTitle from "../hook/useTitle"

export default function Cart() {



    useTitle("Cart")
    const products = [
        { "id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png" },
        { "id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png" },
        { "id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png" },
        { "id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png" },
        { "id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png" },
        { "id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png" }
    ]


    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <h1 className="mb-4 text-4xl text-center text-sm font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Cart Count </h1>

            {products.map((product) => (
                <CartCard key={product.id} product={product} />
            ))}

        </div>
    )
}
