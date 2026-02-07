
function getUserSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbId = JSON.parse(sessionStorage.getItem("cbid"));
    return { cbId, token };
}

export async function getUserOrder(params) {
    const { cbId, token } = getUserSession();
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    const orderData = await response.json();
    return orderData;
}

export async function createOrder(cartList, total, user) {
    const { token } = getUserSession();
    const order = {
        products: cartList,
        total: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const responses = await fetch('http://localhost:8000/660/orders', {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    });
    const orderData = await responses.json();
    return orderData;
}


export async function getLoggedInUserDetails() {
    const { cbId, token } = getUserSession();

    const response = await fetch(`http://localhost:8000/600/users/${cbId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    return data;
}