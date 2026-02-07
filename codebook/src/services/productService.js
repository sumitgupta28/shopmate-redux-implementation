export async function getProductDetails(id) {
    const response = await fetch(`http://localhost:8000/products/${id}`);
    const data = await response.json();
    console.log("ProductDetail data:", data);
    return data;
}

export async function getFeaturedProducts() {
    const response = await fetch('http://localhost:8000/featured_products');
    const data = await response.json();
    return data;
}


export async function getProductList(searchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${searchTerm ? searchTerm : ""}`);
    const data = await response.json()
    return data;
}