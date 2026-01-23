
export default function ProductCard({ product }) {
    const { name, price, image } = product;
    console.log(product);


    return (
        <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
            <img className="rounded-t-base" src={image} alt="" />
            <div className="p-6 text-center">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{name}</h5>
            </div>
            <div className="flex items-center justify-between px-6 pb-6">
                <span className="text-2xl font-bold text-heading">${price}</span>
                <button type="button" className="text-red bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"> Add To Cart</button>
            </div>
        </div>
    )
}
